import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isActive = 0;
  arr = ['推荐','家居','餐厨','床上用品'];
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  isClick(idx){
    this.isActive = idx;
  }
  ionViewDidEnter() {
    //修复轮播手动滑动后不能自动轮播问题
    this.slides.autoplayDisableOnInteraction = false; 
  }
}
