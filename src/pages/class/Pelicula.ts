import { Injectable } from "@angular/core";

@Injectable()
export class Pelicula{

    titulo:string;
    genero:string;
    anoEstreno:number;

    constructor(titulo:string, genero:string, anoEstreno:number){

        this.titulo = titulo;
        this.genero = genero;
        this.anoEstreno = anoEstreno;
        
    }

    getTitulo():string{
        return this.titulo;
    }
    setTitulo(titulo:string){
        this.titulo = titulo;
    }
    getGenero():string{
        return this.genero;
    }
    setGenero(genero:string){
        this.genero = genero;
    }
    getAnoEstreno():number{
        return this.anoEstreno;
    }
    setAnoEstreno(anoEstreno:number){
        this.anoEstreno = anoEstreno;
    }
    
}