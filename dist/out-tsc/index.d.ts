import { FastifyInstance } from "fastify";
export interface ExplorerConfig {
    chain_logo_url: string;
    server_name: string;
}
export default class Explorer {
    internalPluginName: string;
    apiPlugin: boolean;
    indexerPlugin: boolean;
    hasApiRoutes: boolean;
    pluginConfig: ExplorerConfig;
    private baseConfig;
    private chainName;
    constructor();
    apiInit(): void;
    fetchChainLogo(): Promise<void>;
    addRoutes(server: FastifyInstance): void;
}
