import { UsuariosService } from './../../services/Usuarios.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  usuario = {dni: null, nombre: null, contrasena: null, admin: null};
  dni:null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosService:UsuariosService) {
    this.dni = navParams.get('dni');
    if(this.dni !=0){
      this.usuario = usuariosService.getUsuario(this.dni);
    }else{

    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  /*addUsuario(){
    if(this.dni !=0){
      //estamos editando
      this.usuariosService.editUsuario(this.usuario);
      alert('Usuario editada con éxito!');
    }else{
      this.usuariosService.crearUsuario(this.usuario);
      alert('Usuario creado con éxito!');
    }
    this.navCtrl.pop();
  }

  deleteUsuario(){
    this.usuariosService.deleteUsuario(this.usuario);
    alert('Usuario eliminado con éxito!');
    this.navCtrl.pop();
  }*/

}
