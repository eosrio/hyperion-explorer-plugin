export enum FeatureFlagName {
  IsKycSsnSkippingEnabled = 'is_kyc_ssn_skipping_enabled',
  IsQueryingByBlockNumberEnabled = 'is_querying_by_block_number_enabled',
}

interface FeatureFlags {
  [x: string]: { defaultValue: string | number | boolean };
}

export const featureFlags: FeatureFlags = {
  [FeatureFlagName.IsQueryingByBlockNumberEnabled]: { defaultValue: false },
  [FeatureFlagName.IsKycSsnSkippingEnabled]: { defaultValue: true },
};

export interface FeatureFlagClient {
  variation<
    TFlag extends keyof typeof featureFlags,
    TValue extends typeof featureFlags[TFlag]['defaultValue']
  >(
    flag: TFlag
  ): Promise<TValue>;
}
