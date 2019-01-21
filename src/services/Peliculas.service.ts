import { AngularFireDatabase } from '@angular/fire/database';
import { Pelicula } from './../pages/class/Pelicula';
import { Injectable } from "@angular/core";

@Injectable()
export class PeliculasService{

    constructor(public afDB: AngularFireDatabase){
    }

    cartelera:Array<Pelicula> = [];

    public getCartelera(){
        var lista = [];
        this.afDB.database.ref("appCine/peliculas/").on("child_added", function(snapshot) {
            var u = snapshot.val();
            lista.push(new Pelicula(u.titulo,u.genero,u.anoEstreno))
        });
        this.cartelera = lista;
        return lista;
    }

    public encontrarPelicula(titulo:string):boolean{

        this.cartelera = this.getCartelera();
        var encontrado:boolean = false;

        this.cartelera.forEach( p => {
            if (titulo === p.getTitulo()){
                encontrado = true;
            }
        });
        return encontrado;
    }

    public addPelicula(pelicula:Pelicula){
        this.afDB.database.ref("appCine/peliculas/" + pelicula.getTitulo()).set(pelicula);
    }

    public modificarPelicula(pelicula:Pelicula){
        
        var lista = this.afDB.list("appCine/peliculas");
        lista.update(pelicula.getTitulo(),pelicula)

    }

    public borrarPelicula(pelicula:Pelicula){
        this.afDB.database.ref("appCine/peliculas/" + pelicula.getTitulo()).remove();
    }

    public getPelicula(titulo:string):Pelicula{
        return this.cartelera.filter(u => u.titulo === titulo) [0] || null;
    }
}