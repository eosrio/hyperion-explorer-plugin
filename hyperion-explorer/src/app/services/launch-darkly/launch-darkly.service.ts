import { Injectable } from '@angular/core';
import { LDClient, LDUser, initialize } from 'launchdarkly-js-client-sdk';
import { environment } from '../../../environments/environment';
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
  public static client: LDClient;
  private user: LDUser;

  public async initLaunchDarkly(): Promise<void> {
    console.log('Initializing LaunchDarkly client-side');
    this.user = LDAnonymousUser;
    LaunchDarklyService.client = initialize(
      environment.clientSideID,
      this.user
    );
    await LaunchDarklyService.client.waitForInitialization();
  }

  public async variation<
    TFlag extends keyof typeof featureFlags,
    TValue extends typeof featureFlags[TFlag]['defaultValue']
  >(flag: TFlag): Promise<TValue> {
    const defaultValue = featureFlags[flag].defaultValue;
    await LaunchDarklyService.client.waitUntilReady();

    return LaunchDarklyService.client.variation(`${flag}`, defaultValue);
  }
}
