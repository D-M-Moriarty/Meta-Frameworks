#!/bin/bash

# create an API Gateway
gcloud api-gateway apis create meta-framework-api \
    --project=dmoriarty-sandbox-7ba3 \
    --display-name="Meta Framework API" \
    --openapi-spec=meta-framework-api.yaml


gcloud api-gateway api-configs create <CONFIG_ID> \
    --api=<API_ID> \
    --openapi-spec=<OPENAPI_SPEC> \
    --project=<PROJECT_ID> \
    --backend-auth-service-account=<SERVICE_ACCOUNT_EMAIL> \
    --cors-allow-origin=<CORS_ALLOW_ORIGIN> \
    --disable-auth \
    --path-mappings=<PATH_MAPPINGS> \
    --route-backend=<ROUTE_BACKEND> \
    --route-backend-host=<ROUTE_BACKEND_HOST> \
    --route-backend-path=<ROUTE_BACKEND_PATH> \
    --verbosity=<VERBOSITY>

# example:
gcloud api-gateway api-configs create meta-framework-config \
    --api=meta-framework-api \
    --openapi-spec=meta-framework-api.yaml \
    --project=dmoriarty-sandbox-7ba3
