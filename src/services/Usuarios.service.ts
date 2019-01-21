import { Pelicula } from './../pages/class/Pelicula';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from "@angular/core";
import { Usuario } from "../pages/class/Usuario";

@Injectable()
export class UsuariosService{

    constructor(public afDB: AngularFireDatabase){
    }

    usuarios:Array<Usuario> = [];

    public getUsuarios():Array<Usuario>{

        var lista = [];
        this.afDB.database.ref("appCine/usuarios/").on("child_added", function(snapshot) {
            var u = snapshot.val();
            lista.push(new Usuario(u.nombre,u.apellidos,u.email,u.dni,u.contrasena,u.admin))
          });

        return lista;
    }

    public addFavoritos(usuario:Usuario):void{
        
        var longitud = this.afDB.list("appCine/usuarios/" + usuario.getDni() +"/favorito").valueChanges()._subscribe.length;

        if (longitud > 0){
            this.afDB.database.ref("appCine/usuarios/" + usuario.getDni() + "/favorito/").on("child_added",function(snapshot){
                var p = snapshot.val();
                usuario.getFavorito().push(new Pelicula(p.titulo,p.genero,p.anoEstreno))
            });
        }
    }
    
    public encontrarUsuario(dni:string):boolean{
        
        this.usuarios = this.getUsuarios();
        var encontrado:boolean = false;
        
        this.usuarios.forEach( u => {
            if (dni === u.getDni()){
                encontrado = true;
            }
        });
        return encontrado;
    }
    
    public addUsuario(usuario:Usuario){
        this.afDB.database.ref("appCine/usuarios/" + usuario.getDni()).set(usuario);
    }
    
    public nuevoFavorito(usuario:Usuario,pelicula:Pelicula){
        this.afDB.database.ref("appCine/usuarios/" + usuario.getDni() + "/favorito/" + pelicula.getTitulo()).set(pelicula);
    }

    public borrarFavorito(usuario:Usuario, pelicula:Pelicula){
        this.afDB.database.ref("appCine/usuarios/" + usuario.getDni() + "/favorito/" + pelicula.getTitulo()).remove();
    }
    
    public getUsuario(dni:string):Usuario{
        return this.usuarios.filter(u => u.getDni() === dni) [0] || null;
    }

    public modificarUsuario(usuario:Usuario){
        console.log(usuario)
        this.afDB.database.ref("appCine/usuarios/" + usuario.getDni() + "/admin").set(usuario.getAdmin());
        // var lista = this.afDB.list("appCine/usuarios");
        // lista.update(usuario.getDni(),usuario);
    }
}