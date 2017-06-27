import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
//plugins
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { Geofence } from '@ionic-native/geofence';
//page
import { ActivePage } from '../active/active';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  radius: number = 100;
  error: any;
  success: any;

  constructor(
    public navCtrl: NavController, 
    private platform: Platform,
    public geofence: Geofence,
    public geolocation: Geolocation,
    public sms: SMS
    ) {
    this.platform.ready().then(() => {
      geofence.initialize().then(
        
        () => console.log('Geofence Plugin Ready'),
        (err) => console.log(err)
        
      );
    });
  }

  setGeofence(value: number) {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((resp) => {

      var longitude = resp.coords.longitude;
      var latitude = resp.coords.latitude;
      var radius = value;

      let fence = {
        id: "myGeoFenceID1",
        latitude: latitude,
        longitude: longitude,
        radius: radius,
        transitionType: 2
      }

      this.geofence.addOrUpdate(fence).then(() => {
        () => this.success = true;
        (err) => this.error = "faild to add or update fence.";
      });

      this.geofence.onTransitionReceived().subscribe((resp) => {
        this.sms.send('8801672157517', 'She is left');
      });

      this.navCtrl.push(ActivePage);

    }).catch((error) => {
      this.error = error;
      console.log('Error getting location', error);
    });
  }

}
