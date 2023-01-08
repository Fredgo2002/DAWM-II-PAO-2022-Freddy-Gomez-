import { Component } from '@angular/core';
import {Personaje} from '../../interface/personaje'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  personajes!: Personaje[]

  constructor(){
    let characters = JSON.parse(localStorage.getItem("characters")!);
      
    if(characters) {
      this.personajes = characters as Personaje[]
    }
  }
}
