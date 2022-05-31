"use strict";
var _a;
exports.__esModule = true;
exports.featureFlags = exports.FeatureFlagName = void 0;
var FeatureFlagName;
(function (FeatureFlagName) {
    FeatureFlagName["IsQueryingByBlockNumberEnabled"] = "is_querying_by_block_number_enabled";
    FeatureFlagName["IsQueryingTokenValueEnabled"] = "is_querying_token_value_enabled";
    FeatureFlagName["VoiceSystemAccounts"] = "voice_system_accounts";
})(FeatureFlagName = exports.FeatureFlagName || (exports.FeatureFlagName = {}));
exports.featureFlags = (_a = {},
    _a[FeatureFlagName.IsQueryingByBlockNumberEnabled] = { defaultValue: false },
    _a[FeatureFlagName.IsQueryingTokenValueEnabled] = { defaultValue: false },
    _a[FeatureFlagName.VoiceSystemAccounts] = {
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
            'voice.bp1',
            'voice.bridge',
            'voice.fi',
            'voice.market',
            'voice.nft',
            'voice.pay',
            'voice.perms',
            'voice.tknms',
            'voice.up',
        ])
    },
    _a);
