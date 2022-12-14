## NOTE: This is a public archive and no longer maintained. Please visit [explorer.telos.net](https://explorer.telos.net) (native) or [teloscan.io](https://teloscan.io) (evm) to explore blocks, transactions, and more.  

# Hyperion Lightweight Explorer

Install plugin (hpm - hyperion plugin manager)

Hyperion History v3.3.5+ required
```bash
# install from this repository
./hpm install -r https://github.com/eosrio/hyperion-explorer-plugin explorer
# enable the plugin globally
./hpm enable explorer
```

Required configuration on the plugin section of the `chain.config.json`
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

Uninstall
```bash
./hpm uninstall explorer
```
