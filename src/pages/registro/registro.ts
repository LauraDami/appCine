import { UsuariosService } from '../../services/Usuarios.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Usuario } from '../class/Usuario';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario:Usuario = new Usuario("","","","","",false);
  lista = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public usuariosService: UsuariosService) {
  this.lista = usuariosService.getUsuarios();
  }

  logeo():void{
    if (this.usuario.getNombre() === "" || this.usuario.getApellidos() === "" || this.usuario.getEmail() === "" || this.usuario.getDni() === "" || this.usuario.getContrasena() === ""){
      const alert = this.alertCtrl.create({
        title: "Error en el Registro",
        buttons: ["OK"]
      })
      alert.present();
    }else{
      if (this.usuariosService.encontrarUsuario(this.usuario.getDni())){
        const alert = this.alertCtrl.create({
          title: "DNI ya en uso",
          buttons: ["OK"]
        })
        alert.present();
      }else{
        this.usuariosService.addUsuario(new Usuario(this.usuario.getNombre(),this.usuario.getApellidos(),this.usuario.getEmail(),this.usuario.getDni(),this.usuario.getContrasena(),false));
        const alert = this.alertCtrl.create({
          title: "Usuario Registrado",
          buttons: ["OK"]
        })
        this.navCtrl.pop();
        alert.present();
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
