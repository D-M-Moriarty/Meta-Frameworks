#!/bin/bash

# run unlighthouse
#npx unlighthouse --site https://next-app-wlyiet7xva-ew.a.run.app/ -- --perf=80 --pwa=80 --a11y=80 --bp=80 --seo=80 --report=./next-app/report.html

PROJECT_ID=dmoriarty-sandbox-7ba3

# Fetch all running Cloud Run service URLs
URLS=$(gcloud run services list --platform managed --project $PROJECT_ID --format json | jq -r '.[].status.address.url')

# Format the URLs into a comma-separated list
URL_LIST=$(echo $URLS | tr ' ' ',')

# Run lighthouse-batch with the URLs
npx unlighthouse --sites $URL_LIST
