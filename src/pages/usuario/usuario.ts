import { Pelicula } from './../class/Pelicula';
import { UsuariosService } from './../../services/Usuarios.service';
import { ListadosPage } from './../listados/listados';
import { Usuario } from './../class/Usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  
  usuario:Usuario = new Usuario("","","","","",false);

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosService: UsuariosService) {
    this.usuario = navParams.data;
  }

  goListado(boton:number){
    if (boton==1){
      this.navCtrl.push(ListadosPage,[this.usuario,"Cartelera",false]);
    }else{
      this.usuario.setFavorito(new Array<Pelicula>());
      this.usuariosService.addFavoritos(this.usuario);
      this.navCtrl.push(ListadosPage,[this.usuario,"Favoritos",false]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }
}