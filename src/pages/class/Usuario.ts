import { Injectable } from "@angular/core";
import { Pelicula } from "./Pelicula";

@Injectable()
export class Usuario{

    nombre:string;
    apellidos:string;
    email:string;
    dni:string;
    favorito: Array<Pelicula>;
    contrasena: string;
    admin: boolean;
    
    constructor(nombre:string, apellidos:string, email:string, dni:string, contrasena:string, admin:boolean){
        
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.dni = dni;
        this.favorito = new Array<Pelicula>();
        this.contrasena = contrasena;
        this.admin = admin;
        
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    getApellidos():string{
        return this.apellidos;
    }
    setApellidos(apellidos:string){
        this.apellidos = apellidos;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }
    getDni():string{
        return this.dni;
    }
    setDni(dni:string){
        this.dni = dni;
    }
    getFavorito():Array<Pelicula>{
        return this.favorito;
    }
    setFavorito(favorito:Array<Pelicula>){
        this.favorito = favorito;
    }
    getContrasena():string{
        return this.contrasena;
    }
    setContrasena(contrasena:string){
        this.contrasena = contrasena;
    }
    getAdmin():boolean{
        return this.admin;
    }
    setAdmin(admin:boolean){
        this.admin = admin;
    }

    addPelicula(pelicula:Pelicula){
        this.favorito.push(pelicula);
    }

    borrarPelicula(pelicula:Pelicula){
        for (var i = 0; i< this.favorito.length; i++){
            if (this.favorito[i].titulo === pelicula.getTitulo()){
                this.favorito.splice(i,1);
            }
        }
    }
}