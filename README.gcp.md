db instance: ligma
password: ]*u%xtTBZ{Ay&BYa

# GCP Project Setup Guide

This guide will walk you through the process of setting up a new project on Google Cloud Platform (GCP), enabling the Artifact Registry, Google Cloud Build, API Gateway, Service Control API, and Service Management API.

## Prerequisites

1. A Google Account.
2. Access to Google Cloud Platform. If you do not have access yet, sign up [here](https://cloud.google.com/).

## Steps

### 1. Create a New GCP Project

1. Log into the [GCP Console](https://console.cloud.google.com/).
2. Click the project drop-down and select or create the project for which you want to enable the Artifact Registry and Google Cloud Build.
3. Make a note of the Project ID because you will need it for future steps.

### 2. Enable the Artifact Registry API

1. In the GCP Console, go to the Navigation Menu and select "APIs & Services" > "Library".
2. Search for "Artifact Registry API".
3. Click on the "Artifact Registry API" card.
4. Click "Enable" to enable the API for your project.

### 3. Create an Artifact Registry

1. In the GCP Console, go to the Navigation Menu and select "Artifact Registry" > "Repositories".
2. Click "Create repository".
3. Choose a name, format and region for your repository, and then click "Create".

### 4. Enable Google Cloud Build

1. In the GCP Console, go to the Navigation Menu and select "APIs & Services" > "Library".
2. Search for "Cloud Build API".
3. Click on the "Cloud Build API" card.
4. Click "Enable" to enable the API for your project.

### 5. Enable API Gateway

1. In the GCP Console, go to the Navigation Menu and select "APIs & Services" > "Library".
2. Search for "API Gateway API".
3. Click on the "API Gateway API" card.
4. Click "Enable" to enable the API for your project.

### 6. Enable Service Control API

1. In the GCP Console, go to the Navigation Menu and select "APIs & Services" > "Library".
2. Search for "Service Control API".
3. Click on the "Service Control API" card.
4. Click "Enable" to enable the API for your project.

### 7. Enable Service Management API

1. In the GCP Console, go to the Navigation Menu and select "APIs & Services" > "Library".
2. Search for "Service Management API".
3. Click on the "Service Management API" card.
4. Click "Enable" to enable the API for your project.

### 8. Install and Initialize the Google Cloud SDK

If you plan to interact with your project from your local machine, install the [Google Cloud SDK](https://cloud.google.com/sdk) and initialize it:

1. Download and install the SDK by following the [official guide](https://cloud.google.com/sdk/docs/install).
2. Initialize the SDK by running: `gcloud init`
   - Select the account you wish to use for the project.
   - Choose the project you created earlier.
   - Choose a default compute region and zone for the project.

After these steps, you should now have a GCP project set up with an enabled Artifact Registry, Google Cloud Build, API Gateway, Service Control API, and Service Management API. Refer to the [Artifact Registry documentation](https://cloud.google.com/artifact-registry/docs), [Cloud Build documentation](https://cloud.google.com/cloud-build/docs), [API Gateway documentation](https://cloud.google.com/api-gateway/docs), [Service Control API documentation](https://cloud.google.com/service-infrastructure/docs/service-control/reference/rest), and [Service Management API documentation](https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest) for more detailed information and next steps.
