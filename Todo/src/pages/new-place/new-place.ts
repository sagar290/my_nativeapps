import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

import { PlacesService } from "../../services/place.services";

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navCtrl: NavController) {}

  onAddPlace(value: {title: string, note: string}) {
    this.placesService.addPlace({title: value.title, note: value.note});
    this.navCtrl.pop();
  }

}