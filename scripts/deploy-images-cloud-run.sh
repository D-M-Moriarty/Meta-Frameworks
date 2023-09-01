#!/bin/bash

# An array of your service directories
SERVICES=(
"astro-app"
"next-app"
"ng-analog-app"
"nuxt3-app"
"qwikcity-app"
"sveltekit-app"
)

cd ../apps

# Iterate over each service
for SERVICE in ${SERVICES[@]}; do
  echo "Processing $SERVICE..."

  if [[ $SERVICE == "astro-app" ]]; then
    PORT=3000
  else
    PORT=8080
  fi

  # Deploy to Cloud Run in the background
  gcloud run deploy $SERVICE \
      --image europe-west1-docker.pkg.dev/dmoriarty-sandbox-7ba3/meta-framework-images/$SERVICE:tag2 \
      --platform managed \
      --region europe-west1 \
      --allow-unauthenticated \
      --port $PORT &

done

# Wait for all background deployments to complete
wait

echo "All deployments are complete."

