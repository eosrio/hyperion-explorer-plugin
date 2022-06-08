export enum FeatureFlagName {
  IsQueryingByBlockNumberEnabled = 'is_querying_by_block_number_enabled',
  IsQueryingTokenValueEnabled = 'is_querying_token_value_enabled',
  VoiceSystemAccounts = 'voice_system_accounts',
}

interface FeatureFlags {
  [x: string]: { defaultValue: string | number | boolean };
}

export const featureFlags: FeatureFlags = {
  [FeatureFlagName.IsQueryingByBlockNumberEnabled]: { defaultValue: false },
  [FeatureFlagName.IsQueryingTokenValueEnabled]: { defaultValue: false },
  [FeatureFlagName.VoiceSystemAccounts]: {
    defaultValue: JSON.stringify([
      'eosio.token',
      'eosio',
      'eosio.msig',
      'eosio.wrap',
      'eosio.names',
      'eosio.bpay',
      'eosio.prods',
      'eosio.ram',
      'eosio.ramfee',
      'eosio.saving',
      'eosio.stake',
      'eosio.vpay',
      'eosio.rex',
      'simpleassets',
      'simplemarket',
      'vcewaxbridge',
      'voice.auth',
      'voicebp1',
      'voice.bridge',
      'voice.fi',
      'voice.market',
      'voice.nft',
      'voice.pay',
      'voice.perms',
      'voice.tknms',
      'voice.up',
    ]),
  },
};

export interface FeatureFlagClient {
  variation<
    TFlag extends keyof typeof featureFlags,
    TValue extends typeof featureFlags[TFlag]['defaultValue']
  >(
    flag: TFlag
  ): Promise<TValue>;
}
