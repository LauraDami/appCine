import { Pelicula } from './../class/Pelicula';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../class/Usuario';
import { ListadosPage } from '../listados/listados';
import { GestionPage } from '../gestion/gestion';

/**
 * Generated class for the AdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrador',
  templateUrl: 'administrador.html',
})
export class AdministradorPage {

  usuario:Usuario = new Usuario("","","","","",false);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = navParams.data;
  }

  goListado(boton:number){
    if(boton==1){
      this.navCtrl.push(ListadosPage,[this.usuario,"Modificar"]);
    }else if(boton==2){
      this.navCtrl.push(ListadosPage,[this.usuario,"Eliminar"]);
    }else if(boton==3){
      this.navCtrl.push(ListadosPage,[this.usuario,"Usuarios -- Admin"]);
    }else if(boton==4){
      this.navCtrl.push(GestionPage,[new Pelicula("","",null),"Registrar Pelicula",this.usuario]);
    }else{
      this.navCtrl.push(ListadosPage,[this.usuario,"Cartelera"])
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministradorPage');
  }

}
