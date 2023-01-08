import { Component } from '@angular/core';
import { ResourcesService } from '../../service/resources.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  constructor(private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      let characters = localStorage.getItem("characters");
      if(!characters) {
        localStorage.setItem("characters", JSON.stringify(response));
      }
    })

    this.resourcesService.getData1().subscribe(response => {
      let fruits = localStorage.getItem("fruits");
      if(!fruits) {
        localStorage.setItem("fruits", JSON.stringify(response));
      }
    })

    this.resourcesService.getData2().subscribe(response => {
      let movies = localStorage.getItem("movies");
      if(!movies) {
        localStorage.setItem("movies", JSON.stringify(response));
      }
    })
  }
}
