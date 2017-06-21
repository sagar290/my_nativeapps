import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModalController, NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacePage } from "../place/place";


import { PlacesService } from "../../services/place.services";
import { Place } from "../../model/place.model"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(
    public navCtrl: NavController, 
    private placesService: PlacesService, 
    public storage: Storage,
    public ModalCtrl: ModalController
    ) {

  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
    .then(
      (places) => {
        this.places = places;
        console.log(places);
        
      }
    );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place) {
    this.navCtrl.push(PlacePage, place);
  }

  Remove(index) {
      this.storage.get('places').then((places) => {
        places.splice(index, 1);   
        this.storage.set('places', places);
        this.navCtrl.push(HomePage);
    });
  }

}