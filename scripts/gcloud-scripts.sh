#!/bin/bash

gcloud auth login

gcloud config set project <PROJECT_ID>
gcloud config set project dmoriarty-sandbox-7ba3

# if you haven't authenticated docker with gcloud, run this:
#gcloud auth configure-docker

gcloud artifacts repositories create <REPO_NAME> \
    --repository-format=docker \
    --location=europe-west1 \
    --description=<DESCRIPTION>

# example:
gcloud artifacts repositories create meta-framework-images \
    --repository-format=docker \
    --location=europe-west1 \
    --description="Docker repository for meta-framework-images"

gcloud repositories list

gcloud artifacts docker images list --repository=<REPO_NAME>

gcloud artifacts docker images delete <IMAGE_NAME> \
    --repository=<REPO_NAME> \
    --delete-tags

gcloud builds submit --tag europe-west1-docker.pkg.dev/<PROJECT_ID>/<REPO_NAME>/<IMAGE_NAME>:<TAG_NAME> .

# example for meta-framework-images:
gcloud builds submit --tag europe-west1-docker.pkg.dev/dmoriarty-sandbox-7ba3/meta-framework-images/next-app:tag1 .

# use build-push-images-gcp.sh to build and push all images
# example:
./build-push-images-gcp.sh

# use deploy-images-cloud-run.sh to deploy all images
# example:
./deploy-images-cloud-run.sh
# deploy to Cloud Run
gcloud run deploy <SERVICE_NAME> \
    --image europe-west1-docker.pkg.dev/<PROJECT_ID>/<REPO_NAME>/<IMAGE_NAME>:<TAG_NAME> \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated

# example:
gcloud run deploy next-app \
    --image europe-west1-docker.pkg.dev/dmoriarty-sandbox-7ba3/meta-framework-images/next-app:tag1 \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated

# deploy to Cloud Run with environment variables
gcloud run deploy <SERVICE_NAME> \
    --image europe-west1-docker.pkg.dev/<PROJECT_ID>/<REPO_NAME>/<IMAGE_NAME>:<TAG_NAME> \
    --platform managed \
    --region europe-west1 \
    --allow-unauthenticated \
    --set-env-vars <KEY>=<VALUE>,<KEY>=<VALUE>

# add iam policy binding to allow api gateway to invoke cloud run service
gcloud run services add-iam-policy-binding astro-app \
    --member=serviceAccount:cr-invoker@dmoriarty-sandbox-7ba3.iam.gserviceaccount.com \
    --role=roles/run.invoker \
    --platform managed \
    --region europe-west1
