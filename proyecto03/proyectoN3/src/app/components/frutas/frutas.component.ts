import { Component } from '@angular/core';
import {Fruta} from '../../interface/fruta'

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent {
  frutas!: Fruta[]

  constructor(){
    let fruits = JSON.parse(localStorage.getItem("fruits")!);
      
    if(fruits) {
      this.frutas = fruits as Fruta[]
    }
  }
}
