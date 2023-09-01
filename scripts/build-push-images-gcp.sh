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

  # Check if the Dockerfile exists
  if [[ ! -f $SERVICE/Dockerfile ]]; then
    echo "Dockerfile not found in $SERVICE"
    continue
  fi

  # Print the current directory for debug purposes
  echo "Current directory: $(pwd)"
  echo "Building Docker image for $SERVICE in directory $(pwd)/$SERVICE"

  # Build the Docker image in the background
  gcloud builds submit --tag europe-west1-docker.pkg.dev/dmoriarty-sandbox-7ba3/meta-framework-images/$SERVICE:tag2 $SERVICE &

done

# Wait for all backgrounded processes to complete
wait

echo "All builds are complete."
