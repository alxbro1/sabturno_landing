#!/bin/bash
set -e

GREEN='\033[0;32m'
NC='\033[0m'

SERVER="ubuntu@3.87.112.148"
KEY="/Users/alexandersauro/Desktop/PEM/styleup-key.pem"
REMOTE_PATH="/home/ubuntu/web"
LOCAL_DIST="./dist"

npm run build

ssh -i "$KEY" "$SERVER" "sudo chown -R ubuntu:ubuntu $REMOTE_PATH"

scp -i "$KEY" -r "$LOCAL_DIST"/* "$SERVER:$REMOTE_PATH/"

ssh -i "$KEY" "$SERVER" "sudo chown -R www-data:www-data $REMOTE_PATH && sudo chmod -R 755 $REMOTE_PATH"

echo -e "${GREEN}✅ Deploy completed successfully!${NC}"
echo -e "${GREEN}🌐 Site available at: https://sabturno.com${NC}"
