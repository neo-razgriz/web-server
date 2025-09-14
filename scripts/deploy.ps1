# Stop the script if any command fails
$ErrorActionPreference = "Stop"

# --- Configuration ---
. "$PSScriptRoot\.private\.deploy.config.ps1"
$SourceDir  = "dist"

# --- End Configuration ---

echo "Starting build..."
npm run build

echo "Clearing old files on server: $TargetHost"
ssh $TargetHost "rm -rf ${TargetPath}/*"

echo "Copying new files to server..."
# PowerShell uses `\` as an escape, so we just use single quotes for the last command
scp -r "${SourceDir}/*" "${TargetHost}:${TargetPath}/"

echo "Fixing permissions on server..."
ssh $TargetHost "chown -R ${NginxUser}:${NginxUser} ${TargetPath} && find ${TargetPath} -type d -exec chmod 755 {} \; && find ${TargetPath} -type f -exec chmod 644 {} \;"

echo "Deployment complete!"