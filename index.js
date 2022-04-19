"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const fastify_static_1 = __importDefault(require("fastify-static"));
const common_functions_1 = require("../../../helpers/common_functions");
const got_1 = __importDefault(require("got"));
const hyperion_plugin_1 = require("../../hyperion-plugin");
class Explorer extends hyperion_plugin_1.HyperionPlugin {
    constructor(config) {
        super(config);
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
        try {
            if (this.pluginConfig.chain_logo_url) {
                (0, common_functions_1.hLog)(`Downloading chain logo from ${this.pluginConfig.chain_logo_url}...`);
                const chainLogo = await (0, got_1.default)(this.pluginConfig.chain_logo_url);
                const path = (0, path_1.join)(__dirname, 'dist', 'assets', this.chainName + '_logo.png');
                (0, fs_1.writeFileSync)(path, chainLogo.rawBody);
                this.pluginConfig.chain_logo_url = 'https://' + this.pluginConfig.server_name + '/v2/explore/assets/' + this.chainName + '_logo.png';
            }
        }
        catch (e) {
            (0, common_functions_1.hLog)(e);
        }
    }
    addRoutes(server) {
        // @ts-ignore
        const manager = server.manager;
        const apiConfig = manager.config.api;
        const manifestName = `Hyperion Explorer - ${manager.config.api.chain_name}`;
        server.register(require('fastify-compress'), { global: false });
        try {
            const webManifestPath = (0, path_1.join)(__dirname, 'hyperion-explorer', 'src', 'manifest.webmanifest');
            if ((0, fs_1.existsSync)(webManifestPath)) {
                const _data = (0, fs_1.readFileSync)(webManifestPath);
                const tempPath = (0, path_1.join)(__dirname, 'dist', 'manifest.webmanifest');
                if ((0, fs_1.existsSync)(tempPath)) {
                    console.log('Remving compiled manifest');
                    (0, fs_1.unlinkSync)(tempPath);
                }
                const baseManifest = JSON.parse(_data.toString());
                baseManifest.name = manifestName;
                baseManifest.short_name = manifestName;
                server.get('/v2/explore/manifest.webmanifest', (request, reply) => {
                    reply.send(baseManifest);
                });
            }
            else {
                (0, common_functions_1.hLog)('manifest.webmanifest not found in source, using fallback!');
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
        server.register(fastify_static_1.default, {
            root: (0, path_1.join)(__dirname, 'dist'),
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
            reply.sendFile('index.html', (0, path_1.join)(__dirname, 'dist'));
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
exports.default = Explorer;
//# sourceMappingURL=index.js.map