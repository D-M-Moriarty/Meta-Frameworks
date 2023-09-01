#!/bin/bash

cd ..

# Using an associative array to map the base URLs to their corresponding endpoints.
declare -A SITES
SITES=(
    ["https://astro-app-wlyiet7xva-ew.a.run.app"]="/"
    ["https://next-app-wlyiet7xva-ew.a.run.app"]="/memeofday,/memegallery"
    ["https://ng-analog-app-wlyiet7xva-ew.a.run.app"]="/memeofday,/memegallery"
    ["https://nuxt3-app-wlyiet7xva-ew.a.run.app"]="/memeofday,/memegallery"
    ["https://sveltekit-app-wlyiet7xva-ew.a.run.app"]="/memeofday,/memegallery"
)

# Iterate over the base URLs and launch the unlighthouse tool in the background for each.
for SITE in "${!SITES[@]}"; do
    npx unlighthouse --site "$SITE" --urls "${SITES[$SITE]}" &
done

# Wait for all backgrounded unlighthouse commands to complete.
wait

echo "All scans are complete."
