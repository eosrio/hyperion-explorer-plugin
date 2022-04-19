export var FeatureFlagName;
(function (FeatureFlagName) {
    FeatureFlagName["IsQueryingByBlockNumberEnabled"] = "is_querying_by_block_number_enabled";
    FeatureFlagName["IsQueryingTokenValueEnabled"] = "is_querying_token_value_enabled";
    FeatureFlagName["VoiceSystemAccounts"] = "voice_system_accounts";
})(FeatureFlagName || (FeatureFlagName = {}));
export const featureFlags = {
    [FeatureFlagName.IsQueryingByBlockNumberEnabled]: { defaultValue: false },
    [FeatureFlagName.IsQueryingTokenValueEnabled]: { defaultValue: false },
    [FeatureFlagName.VoiceSystemAccounts]: {
        defaultValue: JSON.stringify([
            'eosio.token',
            'eosio',
            'simpleassets',
            'simplemarket',
            'vcewaxbridge',
            'voice.bridge',
            'voice.pay',
            'voice.perms',
        ]),
    },
};
//# sourceMappingURL=featureFlags.js.map