import { Component } from '@angular/core';
import {Pelicula} from '../../interface/pelicula'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas!: Pelicula[]

  constructor(){
    let movies = JSON.parse(localStorage.getItem("movies")!);
      
    if(movies) {
      this.peliculas = movies as Pelicula[]
    }
  }
}
