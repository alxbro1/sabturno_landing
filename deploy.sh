#!/bin/bash
set -e

GREEN='\033[0;32m'
NC='\033[0m'

SERVER="ubuntu@54.210.182.128"
KEY="/Users/alexandersauro/Desktop/Credentials/PEM/styleup-key.pem"
REMOTE_PATH="/home/ubuntu/web"
LOCAL_DIST="./dist"

npm run build

# sudo ssh -i "$KEY" "$SERVER" "sudo chown -R ubuntu:ubuntu $REMOTE_PATH"

sudo scp -i "$KEY" -r "$LOCAL_DIST"/* "$SERVER:$REMOTE_PATH/"

# sudo ssh -i "$KEY" "$SERVER" "sudo chown -R www-data:www-data $REMOTE_PATH && sudo chmod -R 755 $REMOTE_PATH"
