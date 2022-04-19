export declare enum FeatureFlagName {
    IsQueryingByBlockNumberEnabled = "is_querying_by_block_number_enabled",
    IsQueryingTokenValueEnabled = "is_querying_token_value_enabled",
    VoiceSystemAccounts = "voice_system_accounts"
}
interface FeatureFlags {
    [x: string]: {
        defaultValue: string | number | boolean;
    };
}
export declare const featureFlags: FeatureFlags;
export interface FeatureFlagClient {
    variation<TFlag extends keyof typeof featureFlags, TValue extends typeof featureFlags[TFlag]['defaultValue']>(flag: TFlag): Promise<TValue>;
}
export {};
