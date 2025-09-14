#!/bin/bash
set -e

# --- Configuration ---
source "./.private/.deploy.config.sh"
SOURCE_DIR="dist"
# --- End Configuration ---


echo "Starting build..."
npm run build

echo "Clearing old files on server: $TARGET_HOST"
ssh $TARGET_HOST "rm -rf ${TARGET_PATH}/*"

echo "Copying new files to server..."
scp -r ${SOURCE_DIR}/* ${TARGET_HOST}:${TARGET_PATH}/

echo "Fixing permissions on server..."
# This runs all three permission commands in one SSH session
ssh $TARGET_HOST "chown -R ${NGINX_USER}:${NGINX_USER} ${TARGET_PATH} && \
                  find ${TARGET_PATH} -type d -exec chmod 755 {} \; && \
                  find ${TARGET_PATH} -type f -exec chmod 644 {} \;"

echo "Deployment complete!"