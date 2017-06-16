import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  title:string;
  note: string;

  constructor(
    private ViewCtrl: ViewController,
    private NavParams: NavParams,
    private storage: Storage
    ) {

      this.title = this.NavParams.data.title;
      this.note = this.NavParams.data.note;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onClose() {
    this.ViewCtrl.dismiss();
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

}
