#!/usr/bin/env bash
# Re-deploy the portfolio without storing server details in git.
# Required env:
#   DEPLOY_HOST=user@example.com
#   DEPLOY_KEY=/path/to/private/key
#   DEPLOY_REMOTE_DIR=/srv/app
#   DEPLOY_PORT=3000
# Optional env:
#   DEPLOY_APP=portfolio
set -euo pipefail

: "${DEPLOY_HOST:?Set DEPLOY_HOST, e.g. deploy@example.com}"
: "${DEPLOY_KEY:?Set DEPLOY_KEY, e.g. /home/me/.ssh/deploy_key}"
: "${DEPLOY_REMOTE_DIR:?Set DEPLOY_REMOTE_DIR, e.g. /srv/app}"
: "${DEPLOY_PORT:?Set DEPLOY_PORT, e.g. 3000}"

APP="${DEPLOY_APP:-portfolio}"
PORT="$DEPLOY_PORT"
ARCHIVE="/tmp/portfolio-deploy.tar.gz"

shell_quote() {
  printf "%q" "$1"
}

cd "$(dirname "$0")/.."

echo "==> Packaging code..."
tar --exclude=node_modules --exclude=.next --exclude=.git --exclude='.env*' --exclude='*.log' -czf "$ARCHIVE" .

echo "==> Uploading to server..."
scp -i "$DEPLOY_KEY" -o IdentitiesOnly=yes "$ARCHIVE" "$DEPLOY_HOST:/tmp/portfolio-deploy.tar.gz"

REMOTE_DIR_Q="$(shell_quote "$DEPLOY_REMOTE_DIR")"
APP_Q="$(shell_quote "$APP")"
PORT_Q="$(shell_quote "$PORT")"

echo "==> Installing, building, and restarting..."
ssh -i "$DEPLOY_KEY" -o IdentitiesOnly=yes "$DEPLOY_HOST" "REMOTE_DIR=$REMOTE_DIR_Q APP=$APP_Q PORT=$PORT_Q bash -s" <<'REMOTE_SCRIPT'
set -e

mkdir -p "$REMOTE_DIR"
tar -xzf /tmp/portfolio-deploy.tar.gz -C "$REMOTE_DIR"
rm /tmp/portfolio-deploy.tar.gz
cd "$REMOTE_DIR"

npm ci
npm run build
pm2 restart "$APP" --update-env || PORT="$PORT" pm2 start npm --name "$APP" -- start
pm2 save
REMOTE_SCRIPT

echo "==> Done."
