import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

import { PlacesService } from "../../services/place.services";

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})
export class NewPlacePage {

  public id: number;

  constructor(private placesService: PlacesService, private navCtrl: NavController) {}

    ionViewWillEnter() {
    this.placesService.getPlaces()
    .then(
      (places) => {
        this.id = places == null ? places.length  -1 : places.length;

      }
    );
  }

  onAddPlace(value: {title: string, note: string}) {
    this.placesService.addPlace({id: this.id, title: value.title, note: value.note });
    this.navCtrl.pop();
    this.placesService.presentToast('Note Added', 3000, 'middle');
  }

}