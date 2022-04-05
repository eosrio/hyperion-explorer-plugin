import { __awaiter } from "tslib";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";
import fastifyStatic from "fastify-static";
export default class Explorer {
    constructor() {
        this.internalPluginName = 'explorer';
        this.apiPlugin = true;
        this.indexerPlugin = false;
        this.hasApiRoutes = true;
        if (this.baseConfig) {
            this.pluginConfig = this.baseConfig;
            if (process.title.endsWith('api')) {
                this.apiInit();
            }
        }
    }
    apiInit() {
        this.fetchChainLogo().catch(console.log);
    }
    async fetchChainLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { got } = await import('got');
                if (this.pluginConfig.chain_logo_url) {
                    console.log(`Downloading chain logo from ${this.pluginConfig.chain_logo_url}...`);
                    const chainLogo = yield got(this.pluginConfig.chain_logo_url);
                    const path = join(__dirname, 'dist', 'assets', this.chainName + '_logo.png');
                    writeFileSync(path, chainLogo.rawBody);
                    this.pluginConfig.chain_logo_url = 'https://' + this.pluginConfig.server_name + '/v2/explore/assets/' + this.chainName + '_logo.png';
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    addRoutes(server) {
        // @ts-ignore
        const manager = server.manager;
        const apiConfig = manager.config.api;
        const manifestName = `Hyperion Explorer - ${manager.config.api.chain_name}`;
        server.register(require('fastify-compress'), { global: false });
        try {
            const webManifestPath = join(__dirname, 'hyperion-explorer', 'src', 'manifest.webmanifest');
            if (existsSync(webManifestPath)) {
                const _data = readFileSync(webManifestPath);
                const tempPath = join(__dirname, 'dist', 'manifest.webmanifest');
                if (existsSync(tempPath)) {
                    console.log('Remving compiled manifest');
                    unlinkSync(tempPath);
                }
                const baseManifest = JSON.parse(_data.toString());
                baseManifest.name = manifestName;
                baseManifest.short_name = manifestName;
                server.get('/v2/explore/manifest.webmanifest', (request, reply) => {
                    reply.send(baseManifest);
                });
            }
            else {
                console.log('manifest.webmanifest not found in source, using fallback!');
                const _p = "maskable any";
                const _t = "image/png";
                const fallbackData = {
                    name: manifestName, short_name: manifestName,
                    theme_color: "#1976d2", background_color: "#fafafa",
                    display: "standalone",
                    scope: "./", start_url: "./",
                    icons: [
                        { src: "assets/icons/icon-72x72.png", sizes: "72x72", type: _t, purpose: _p },
                        { src: "assets/icons/icon-96x96.png", sizes: "96x96", type: _t, purpose: _p },
                        { src: "assets/icons/icon-128x128.png", sizes: "128x128", type: _t, purpose: _p },
                        { src: "assets/icons/icon-144x144.png", sizes: "144x144", type: _t, purpose: _p },
                        { src: "assets/icons/icon-152x152.png", sizes: "152x152", type: _t, purpose: _p },
                        { src: "assets/icons/icon-192x192.png", sizes: "192x192", type: _t, purpose: _p },
                        { src: "assets/icons/icon-384x384.png", sizes: "384x384", type: _t, purpose: _p },
                        { src: "assets/icons/icon-512x512.png", sizes: "512x512", type: _t, purpose: _p }
                    ]
                };
                server.get('/v2/explore/manifest.webmanifest', (request, reply) => {
                    reply.send(fallbackData);
                });
            }
        }
        catch (e) {
            console.log(e);
        }
        server.register(fastifyStatic, {
            root: join(__dirname, 'dist'),
            redirect: true,
            wildcard: false,
            prefix: '/v2/explore',
            setHeaders: (res, path) => {
                if (path.endsWith('/ngsw-worker.js')) {
                    res.setHeader('Service-Worker-Allowed', '/');
                }
            }
        });
        server.get('/v2/explore/**/*', (request, reply) => {
            reply.sendFile('index.html', join(__dirname, 'dist'));
        });
        server.get('/v2/explorer_metadata', (request, reply) => {
            reply.send({
                logo: this.pluginConfig.chain_logo_url,
                provider: apiConfig.provider_name,
                provider_url: apiConfig.provider_url,
                chain_name: apiConfig.chain_name,
                chain_id: manager.conn.chains[manager.chain].chain_id,
                custom_core_token: apiConfig.custom_core_token
            });
        });
    }
}
//# sourceMappingURL=index.js.map