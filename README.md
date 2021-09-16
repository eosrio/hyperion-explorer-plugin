# Hyperion Lightweight Explorer

Install plugin (using hyperion plugin manager)
```bash
./hpm install -r https://github.com/eosrio/hyperion-explorer-plugin -b main explorer
```

Required config:
```json
{
  "plugins": {
    "explorer": {
      "enabled": true,
      "chain_logo_url": "https://example.com/chain_logo.png",
      "server_name": "SERVER_PUBLIC_HOSTNAME"
    }
  }
}
```
