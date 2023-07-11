#!/bin/bash

# create an API Gateway
gcloud api-gateway apis create meta-framework-api \
    --project=dmoriarty-sandbox-7ba3 \
    --display-name="Meta Framework API" \
    --openapi-spec=meta-framework-api.yaml


# create an API Config
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


# create a gateway
gcloud api-gateway gateways create meta-framework-gateway \
    --api=meta-framework-api \
    --api-config=meta-framework-config \
    --location=europe-west1 \
    --project=dmoriarty-sandbox-7ba3


# enable the private API
gcloud services enable apigateway.googleapis.com \
    --project=dmoriarty-sandbox-7ba3

# create api key
gcloud api-gateway api-keys create <API_KEY_ID> \
    --api=<API_ID> \
    --key-string=<KEY_STRING> \
    --project=<PROJECT_ID>

# add iam policy binding
gcloud api-gateway api-configs add-iam-policy-binding <CONFIG_ID> \
    --api=<API_ID> \
    --member=<MEMBER> \
    --role=<ROLE> \
    --project=<PROJECT_ID>

# get all routes
gcloud api-gateway api-configs describe <CONFIG_ID> \
    --api=<API_ID> \
    --project=<PROJECT_ID> \
    --format="value(gatewayConfig.backends.backendRule[0].pathMatcher.routeRule[0].selector)"

#example:
gcloud api-gateway api-configs describe meta-framework-config \
    --api=meta-framework-api \
    --project=dmoriarty-sandbox-7ba3 \
    --format="value(gatewayConfig.backends.backendRule[0].pathMatcher.routeRule[0].selector)"

# update api config
gcloud api-gateway api-configs update <CONFIG_ID> \
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
gcloud api-gateway api-configs update meta-framework-config \
    --api=meta-framework-api \
    --openapi-spec=meta-framework-api.yaml \
    --project=dmoriarty-sandbox-7ba3


# update api gateway
gcloud api-gateway gateways update <GATEWAY_ID> \
    --api=<API_ID> \
    --api-config=<CONFIG_ID> \
    --location=<LOCATION> \
    --project=<PROJECT_ID>

# example:
gcloud api-gateway gateways update meta-framework-gateway \
    --api=meta-framework-api \
    --api-config=meta-framework-config \
    --location=europe-west1 \
    --project=dmoriarty-sandbox-7ba3
