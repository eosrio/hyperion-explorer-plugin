# Hyperion Lightweight Explorer

Getting Started:
Install angular cli if you do not already have it.
In the root directory run `npm install`.

Running Locally:
cd into the hyperion-explorer/ directory and run `npm install `
Running locally should point to dev for the hyperion-history api but you can double check this in the environment.ts file. 
eosioNodeUrl and hyperionApiUrl sould both be `https://scan.dev.vops.co` (can update this as needed)
run the project using:
 ```bash
ng serve --open
```
note: if you get a blank white screen open up the index.html file and change the base href value to `/` (don't forget to change it back before making PR)

Adding changes:
When making changes in the repo you will update the .ts files like you normally would in our other repos and these changes will be reflected automatically locally. However you will need to build the repo (ng build) before pushing these changes so they will be reflected in dev and prod.
Running `ng build` will update all the associated .js files.
If you add new files you will need to run tsc new/file/location to generate the new .js files
You can add `--sourcemap` to the tsc command to add the .js.map files

How to use LaunchDarkly

Use class instantiation -> `featureFlagClient = new LaunchDarklyService();`
then call waitUntilReady() function -> `await featureFlagClient.client.waitUntilReady()`
you now have access to the flags -> `const flags = featureFlagClient.client.allFlags()`
