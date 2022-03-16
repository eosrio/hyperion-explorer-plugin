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

How to use LaunchDarkly

Use class instantiation -> `featureFlagClient = new LaunchDarklyService();`
then call waitUntilReady() function -> `await featureFlagClient.client.waitUntilReady()`
you now have access to the flags -> `const flags = featureFlagClient.client.allFlags()`
