#!/bin/bash
set -euo pipefail

export AWS_PROFILE=sabturno AWS_REGION=us-east-1
APP_ID=d3tlsyf8fyzqva
BRANCH=staging
TMP=$(mktemp -d)
ZIP="$TMP/dist.zip"
trap 'rm -rf "$TMP"' EXIT

npm run build
(cd dist && zip -qr "$ZIP" .)

read -r JOB_ID URL < <(aws amplify create-deployment --app-id "$APP_ID" --branch-name "$BRANCH" \
  --query '[jobId, zipUploadUrl]' --output text)
curl -fsS -X PUT -H 'Content-Type: application/zip' --upload-file "$ZIP" "$URL"
aws amplify start-deployment --app-id "$APP_ID" --branch-name "$BRANCH" --job-id "$JOB_ID" >/dev/null

while :; do
  STATUS=$(aws amplify get-job --app-id "$APP_ID" --branch-name "$BRANCH" --job-id "$JOB_ID" \
    --query 'job.summary.status' --output text)
  case "$STATUS" in
    SUCCEED) echo "Deploy $JOB_ID OK: https://www.sabturno.com"; break ;;
    FAILED|CANCELLED) echo "Deploy $JOB_ID terminó en $STATUS" >&2; exit 1 ;;
    *) sleep 5 ;;
  esac
done
