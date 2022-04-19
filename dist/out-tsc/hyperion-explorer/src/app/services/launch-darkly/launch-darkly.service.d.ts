import { LDClient } from 'launchdarkly-js-client-sdk';
import { FeatureFlagClient, featureFlags } from './featureFlags';
export declare const LDUserCustomProperties: {
    platform: string;
};
export declare const LDAnonymousUser: {
    anonymous: boolean;
    custom: {
        platform: string;
    };
    key: string;
};
export declare class LaunchDarklyService implements FeatureFlagClient {
    static client: LDClient;
    private user;
    initLaunchDarkly(): Promise<void>;
    variation<TFlag extends keyof typeof featureFlags, TValue extends typeof featureFlags[TFlag]['defaultValue']>(flag: TFlag): Promise<TValue>;
}
