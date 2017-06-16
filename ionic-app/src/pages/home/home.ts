import { Component } from '@angular/core';
import {AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords: any;
  accuracy: any;
  error:any;

  constructor(private alertCtrl: AlertController, private geolocation: Geolocation) {

  }
  
  watch() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.coords = resp.coords.latitude + '  ' + resp.coords.longitude;
        this.accuracy = resp.coords.accuracy + 'metter';
      }).catch((error) => {
        this.error = 'Error get location' + error;
      });
  }


  openIt(tops) {
    tops.open();
  }

  alertIt() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
