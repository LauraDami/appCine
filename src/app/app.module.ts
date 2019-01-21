import { ListadosPageModule } from './../pages/listados/listados.module';
import { UsuariosService } from '../services/Usuarios.service';
import { PeliculasService } from './../services/Peliculas.service';
import { UsuarioPageModule } from './../pages/usuario/usuario.module';
import { AdministradorPageModule } from './../pages/administrador/administrador.module';
import { AccesoPageModule } from './../pages/acceso/acceso.module';
import { RegistroPageModule } from './../pages/registro/registro.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GestionPageModule } from '../pages/gestion/gestion.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCVzKy5OiO5xV0sgKo3eFTHyTW3uSYkFnA",
  authDomain: "appcine-8b0ca.firebaseapp.com",
  databaseURL: "https://appcine-8b0ca.firebaseio.com",
  storageBucket: "appcine-8b0ca.appspot.com",
  messagingSenderId: "931186105805"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegistroPageModule,
    AccesoPageModule,
    AdministradorPageModule,
    UsuarioPageModule,
    ListadosPageModule,
    GestionPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeliculasService,
    UsuariosService
  ]
})
export class AppModule {}
