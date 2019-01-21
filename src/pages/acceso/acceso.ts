import { Usuario } from './../class/Usuario';
import { UsuariosService } from '../../services/Usuarios.service';
import { UsuarioPage } from './../usuario/usuario';
import { AdministradorPage } from './../administrador/administrador';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AccesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceso',
  templateUrl: 'acceso.html',
})
export class AccesoPage {

  usuario:Usuario = new Usuario("","","","","",false);
  aux:Usuario;
  lista:Array<Usuario> = new Array<Usuario>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public usuariosService: UsuariosService) {
  this.lista = usuariosService.getUsuarios();
  }

  goOn():void{
    if (this.usuariosService.encontrarUsuario(this.usuario.getDni())){
      this.aux = this.usuariosService.getUsuario(this.usuario.getDni());
      if (this.aux.getContrasena() === this.usuario.getContrasena()){
        if (this.aux.getAdmin() == true){
          this.navCtrl.push(AdministradorPage, this.aux);
        }else{
          this.navCtrl.push(UsuarioPage,this.aux);
        }
      }else{
        const alert = this.alertCtrl.create({
          title: "Contraseña incorrecta",
          buttons: ["OK"]
        })
        alert.present();
      }
    }else{
      const alert = this.alertCtrl.create({
        title: "Usuario no registrado",
        buttons: ["OK"]
      })
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesoPage');
  }

}

