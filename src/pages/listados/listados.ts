import { PeliculasService } from './../../services/Peliculas.service';
import { UsuariosService } from './../../services/Usuarios.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pelicula } from '../class/Pelicula';
import { Usuario } from '../class/Usuario';
import { GestionPage } from '../gestion/gestion';

/**
 * Generated class for the ListadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listados',
  templateUrl: 'listados.html',
})
export class ListadosPage {

  usuario:Usuario = new Usuario("","","","","",false);
  accion:string = "";
  cartelera:Array<Pelicula> = [];
  usuarios:Array<Usuario> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public usuariosService: UsuariosService, public peliculasService: PeliculasService) {
    this.usuario = navParams.data[0];
    this.accion = navParams.data[1];
    this.usuarios = usuariosService.getUsuarios();
    this.cartelera = peliculasService.getCartelera();
  }

  itemSelected(pelicula:Pelicula){
    this.navCtrl.push(GestionPage,[pelicula,this.accion,this.usuario]);
  }

  cambiarAdmin(usuario:Usuario){
    var cont = 0;
    for(let i = 0; i<this.usuarios.length; i++){
      if (this.usuarios[i].getAdmin() == true){
        cont++;
      }
    }
    if(usuario.getAdmin() == true){
      if (cont > 1){
        usuario.setAdmin(false);
        const alert = this.alertCtrl.create({
          title: "El usuario ya no es Admin",
          buttons: ["OK"]
        })
        this.usuariosService.modificarUsuario(usuario);
        alert.present();
      }else{
        const alert = this.alertCtrl.create({
          title: "Debe haber un Admin",
          buttons: ["OK"]
        })
        alert.present();
        this.navCtrl.setRoot(this.navCtrl.getActive().component,[this.usuario,this.accion]);
      }
    }else{
      usuario.setAdmin(true);
      const alert = this.alertCtrl.create({
        title: "El usuario es Admin",
        buttons: ["OK"]
      })
      this.usuariosService.modificarUsuario(usuario);
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadosPage');
  }
}
