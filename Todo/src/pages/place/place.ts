import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from "ionic-angular";

import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  title:string;
  note: string;
  index: number;

  constructor(
    private ViewCtrl: ViewController,
    private NavParams: NavParams,
    private storage: Storage,
    private navCtrl: NavController
    ) {

      this.title = this.NavParams.data.title;
      this.note = this.NavParams.data.note;
      this.index = this.NavParams.data.index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onClose() {
    this.navCtrl.pop();
  }

  RemoveItem(key) {
    console.log(key);
  }

}
