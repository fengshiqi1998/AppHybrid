import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  arr = ['客厅','卧室','餐厅','书房','门厅'];
  isActive = 0;
  constructor(public navCtrl: NavController) {

  }
  isClick(idx){
    this.isActive = idx;
  }
}
