import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from "ionic-angular";

import { ViewController, NavParams } from 'ionic-angular';

// import { HomePage } from '../home/home';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  title:string;
  note: string;
  id: number;
  index: number;

  constructor(
    private ViewCtrl: ViewController,
    private NavParams: NavParams,
    private storage: Storage,
    private navCtrl: NavController
    ) {

      this.title = this.NavParams.data.place.title;
      this.note = this.NavParams.data.place.note;
      this.id = this.NavParams.data.place.id;
      this.index = this.NavParams.data.index;
      console.log(this.NavParams.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onClose() {
    this.navCtrl.pop();
  }

  RemoveItem(index) {
    this.storage.get('places').then((places) => {
        places.splice(index, 1); 
        this.storage.set('places', places);
        this.navCtrl.pop();
    });
  }

}
