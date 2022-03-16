import { Component, OnInit } from '@angular/core';
import { LaunchDarklyService } from './services/launch-darkly/launch-darkly.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public async initLaunchDarkly(): Promise<void> {
    const featureFlagClient = new LaunchDarklyService();
    await featureFlagClient.initLaunchDarkly();
  }

  async ngOnInit(): Promise<void> {
    await this.initLaunchDarkly();
  }
}
