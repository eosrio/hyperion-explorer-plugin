import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {existsSync, readFileSync, unlinkSync} from "fs";
import {join} from "path";
import fastifyStatic from "fastify-static";
import {ServerResponse} from "http";
import { HyperionPlugin } from "./hyperion-explorer/plugins/hyperion-plugin";

export interface ExplorerConfig {
    chain_logo_url: string;
    server_name: string;
}

export default class Explorer extends HyperionPlugin  {
    internalPluginName = 'explorer';
    apiPlugin = true;
    indexerPlugin = false;
    hasApiRoutes = true;
    pluginConfig: ExplorerConfig;

    constructor(config: ExplorerConfig) {
        super(config);

        if (this.baseConfig) {
            this.pluginConfig = this.baseConfig;
            if (process.title.endsWith('api')) {
                this.apiInit();
            }
        }
    }

    apiInit() {
        try {
            this.fetchChainLogo().catch(console.log);
        } catch (err) {
            console.log(err, 'error on api init')
        }
    }

    async fetchChainLogo() {
        try {
            if (this.pluginConfig.chain_logo_url) {
                console.log(`Downloading chain logo from ${this.pluginConfig.chain_logo_url}...`);
                this.pluginConfig.chain_logo_url = 'https://' + this.pluginConfig.server_name + '/v2/explore/assets/' + this.chainName + '_logo.png';
            }
        } catch (e) {
            console.log(e, 'error fetching logo');
        }
    }

    addRoutes(server: FastifyInstance): void {
        // @ts-ignore
        const manager = server.manager;
        const apiConfig = manager.config.api;
        const manifestName = `Hyperion Explorer - ${manager.config.api.chain_name}`;

        server.register(require('fastify-compress'), {global: false});

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
                server.get('/v2/explore/manifest.webmanifest', (request: FastifyRequest, reply: FastifyReply) => {
                    reply.send(baseManifest);
                });
            } else {
                console.log('manifest.webmanifest not found in source, using fallback!');
                const _p = "maskable any";
                const _t = "image/png";
                const fallbackData = {
                    name: manifestName, short_name: manifestName,
                    theme_color: "#1976d2", background_color: "#fafafa",
                    display: "standalone",
                    scope: "./", start_url: "./",
                    icons: [
                        {src: "assets/icons/icon-72x72.png", sizes: "72x72", type: _t, purpose: _p},
                        {src: "assets/icons/icon-96x96.png", sizes: "96x96", type: _t, purpose: _p},
                        {src: "assets/icons/icon-128x128.png", sizes: "128x128", type: _t, purpose: _p},
                        {src: "assets/icons/icon-144x144.png", sizes: "144x144", type: _t, purpose: _p},
                        {src: "assets/icons/icon-152x152.png", sizes: "152x152", type: _t, purpose: _p},
                        {src: "assets/icons/icon-192x192.png", sizes: "192x192", type: _t, purpose: _p},
                        {src: "assets/icons/icon-384x384.png", sizes: "384x384", type: _t, purpose: _p},
                        {src: "assets/icons/icon-512x512.png", sizes: "512x512", type: _t, purpose: _p}
                    ]
                };
                server.get('/v2/explore/manifest.webmanifest', (request: FastifyRequest, reply: FastifyReply) => {
                    reply.send(fallbackData);
                });
            }
        } catch (e) {
            console.log(e, 'failed to add routes');
        }


        server.register(fastifyStatic, {
            root: join(__dirname, 'dist'),
            redirect: true,
            wildcard: false,
            prefix: '/v2/explore',
            setHeaders: (res: ServerResponse, path) => {
                if (path.endsWith('/ngsw-worker.js')) {
                    res.setHeader('Service-Worker-Allowed', '/');
                }
            }
        });

        server.get('/v2/explore/**/*', (request: FastifyRequest, reply: FastifyReply) => {
            reply.sendFile('index.html', join(__dirname, 'dist'));
        });

        server.get('/v2/explorer_metadata', (request: FastifyRequest, reply: FastifyReply) => {
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
