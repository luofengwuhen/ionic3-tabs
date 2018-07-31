import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NewsPage } from '../../pages/news/news';
import {VgAPI } from 'videogular2/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
  api:VgAPI;
  jk:any;
  adress:any;
  longUrl:any;
  poster:any;
  mediaUrl:any;
  constructor(public navCtrl: NavController) {
    this.jk="http://jx.618g.com/?url="; //设置默认接口
    

  }
  // gonews(){
  //   this.navCtrl.push(NewsPage);
  // }
  onPlayerReady(api: VgAPI) {
    this.api = api;
   }

  play(){
     this.longUrl=this.jk+this.adress;
     //this.poster=this.longUrl;
     this.mediaUrl=this.longUrl;
     console.log(this.longUrl);
  }
 

}
