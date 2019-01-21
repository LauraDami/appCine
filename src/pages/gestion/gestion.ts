import { UsuariosService } from './../../services/Usuarios.service';
import { Usuario } from './../class/Usuario';
import { PeliculasService } from './../../services/Peliculas.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pelicula } from '../class/Pelicula';

/**
 * Generated class for the GestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion',
  templateUrl: 'gestion.html',
})
export class GestionPage {

  accion:string = "";
  pelicula:Pelicula = new Pelicula("","",null);
  usuario:Usuario = new Usuario("","","","","",false);

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public usuariosService: UsuariosService, public peliculasService: PeliculasService) {
    this.pelicula = navParams.data[0];
    this.accion = navParams.data[1];
    this.usuario = navParams.data[2];
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  guardar(accion:string){
    if (this.pelicula.getTitulo() === "" || this.pelicula.getGenero() === "" || this.pelicula.getAnoEstreno() == null ){
      const alert = this.alertCtrl.create({
        title: "Datos Erroneos",
        buttons: ["OK"]
      })
      alert.present();
    }else{
      if (accion === "Registrar Pelicula"){
        if (this.peliculasService.encontrarPelicula(this.pelicula.getTitulo())){
          const alert = this.alertCtrl.create({
            title: "Pelicula ya Registrada",
            buttons: ["OK"]
          })
          alert.present();
        }else{
          this.peliculasService.addPelicula(new Pelicula(this.pelicula.getTitulo(),this.pelicula.getGenero(),this.pelicula.getAnoEstreno()));
          const alert = this.alertCtrl.create({
            title: "Pelicula Registrada",
            buttons: ["OK"]
          })
          this.navCtrl.pop();
          alert.present();
        }
      }else{
        this.peliculasService.modificarPelicula(new Pelicula(this.pelicula.getTitulo(),this.pelicula.getGenero(),this.pelicula.getAnoEstreno()));
        const alert = this.alertCtrl.create({
          title: "Pelicula Modificada",
          buttons: ["OK"]
        })
        alert.present();
      }
    }
  }

  eliminar(){
    this.peliculasService.borrarPelicula(this.pelicula);
    const alert = this.alertCtrl.create({
      title: "Pelicula Eliminada",
      buttons: ["OK"]
    })
    this.navCtrl.pop();
    alert.present();
  }

  addFavorito(){
    this.usuario.addPelicula(this.pelicula);
    const alert = this.alertCtrl.create({
      title: "Pelicula añadida a Favoritos",
      buttons: ["OK"]
    })
    alert.present();
    this.usuariosService.nuevoFavorito(this.usuario,this.pelicula);
  }

  eliminarFavoritos(){
    this.usuariosService.borrarFavorito(this.usuario,this.pelicula);
    this.usuario.setFavorito(new Array<Pelicula>());
    this.usuariosService.addFavoritos(this.usuario);
    const alert = this.alertCtrl.create({
      title: "Pelicula Eliminada",
      buttons: ["OK"]
    })
    alert.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionPage');
  }
}
