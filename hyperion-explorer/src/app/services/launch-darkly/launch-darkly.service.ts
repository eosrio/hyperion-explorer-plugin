import { Injectable } from '@angular/core';
import { LDClient, LDUser, initialize } from 'launchdarkly-js-client-sdk';
import { environment } from 'src/environments/environment';
import { FeatureFlagClient, featureFlags } from './featureFlags';

export const LDUserCustomProperties = {
  platform: 'hyperion-web',
};

export const LDAnonymousUser = {
  anonymous: true,
  custom: LDUserCustomProperties,
  key: 'anonymous',
};

@Injectable({
  providedIn: 'root',
})
export class LaunchDarklyService implements FeatureFlagClient {
  public client: LDClient;
  private user: LDUser;

  constructor() {
    this.initLaunchDarkly();
  }

  private initLaunchDarkly(): void {
    console.log('Initializing LaunchDarkly client-side');
    this.user = { key: 'anonymous' };

    this.client = initialize(environment.clientSideID, this.user);
  }

  public async variation<
    TFlag extends keyof typeof featureFlags,
    TValue extends typeof featureFlags[TFlag]['defaultValue']
  >(flag: TFlag): Promise<TValue> {
    const defaultValue = featureFlags[flag].defaultValue;

    return this.client.variation(`${flag}`, defaultValue);
  }
}
