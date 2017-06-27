import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AdMob } from '@ionic-native/admob';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private admob: AdMob,
    ) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      if (platform.is('cordova')) {
        let options = {
          adId: 'ca-app-pub-8333742221428550/4840960823',
        };

        this.admob.createBanner(options).then(() => {
          admob.showBanner(8);
        });
      }
            

    });
  }
}

