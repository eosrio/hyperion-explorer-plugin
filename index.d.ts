import { FastifyInstance } from "fastify";
import { HyperionPlugin } from "../../hyperion-plugin";
export interface ExplorerConfig {
    chain_logo_url: string;
    server_name: string;
}
export default class Explorer extends HyperionPlugin {
    internalPluginName: string;
    apiPlugin: boolean;
    indexerPlugin: boolean;
    hasApiRoutes: boolean;
    pluginConfig: ExplorerConfig;
    constructor(config: ExplorerConfig);
    apiInit(): void;
    fetchChainLogo(): Promise<void>;
    addRoutes(server: FastifyInstance): void;
}
