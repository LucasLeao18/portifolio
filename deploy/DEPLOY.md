# Deploy

This repository is public. Keep VPS IPs, SSH users, private key paths,
personal emails, and other infrastructure details outside git.

## Required local configuration

Set these variables in your shell or in a local env file that is not committed:

```bash
export DEPLOY_HOST="deploy@example.com"
export DEPLOY_KEY="$HOME/.ssh/deploy_key"
export DEPLOY_REMOTE_DIR="/srv/app"
export DEPLOY_PORT="3000"
```

Optional:

```bash
export DEPLOY_APP="portfolio"
```

## DNS and SSL

Point the `A` records for your domain and `www` subdomain to the
production VPS IP in your DNS provider. Do not commit the IP here.

After DNS propagates, issue SSL on the server:

```bash
sudo certbot --nginx -d example.com -d www.example.com --redirect
```

## Re-deploy

From the project folder:

```bash
bash deploy/redeploy.sh
```

The script packages the code, uploads it, installs dependencies, builds, and
restarts the pm2 app. It excludes `.env*`, logs, `node_modules`, `.next`, and
`.git` from the deployment archive.
