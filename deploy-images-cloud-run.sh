#!/bin/bash

# An array of your service directories
SERVICES=("astro-app" "next-app" "nuxt-app" "qwik-app" "remix-app" "svelte-app")

# Iterate over each service
for SERVICE in ${SERVICES[@]}; do
  echo "Processing $SERVICE..."

  # deploy to Cloud Run
  gcloud run deploy $SERVICE \
      --image europe-west1-docker.pkg.dev/dmoriarty-sandbox-7ba3/meta-framework-images/$SERVICE:tag2 \
      --platform managed \
      --region europe-west1 \
      --allow-unauthenticated
done
