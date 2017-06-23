import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Place } from '../model/place.model';
import {  ToastController } from 'ionic-angular';

@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
      
  }

  addPlace(place: Place) {
    this.places.push(place);
    this.storage.set('places', this.places);
  }

  getPlaces() {
    return this.storage.get('places')
    .then(
        (places) => {
            this.places = places == null ? [] : places;
            return this.places.slice();
        }
    )
  }

  presentToast(message: string, duration: number, position: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.present();
  }
}