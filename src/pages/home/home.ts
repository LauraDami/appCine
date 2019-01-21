import { AccesoPage } from './../acceso/acceso';
import { RegistroPage } from './../registro/registro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goRegistro():void{
    this.navCtrl.push(RegistroPage)
  }

  goAcceso():void{
    this.navCtrl.push(AccesoPage)
  }

}
