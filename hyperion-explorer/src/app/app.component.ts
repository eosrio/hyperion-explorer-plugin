import { Component } from '@angular/core';
import { LaunchDarklyService } from './services/launch-darkly/launch-darkly.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.initLaunchDarkly();
  }

  private async initLaunchDarkly(): Promise<LaunchDarklyService> {
    const featureFlagClient = new LaunchDarklyService();

    return featureFlagClient;
  }
}
