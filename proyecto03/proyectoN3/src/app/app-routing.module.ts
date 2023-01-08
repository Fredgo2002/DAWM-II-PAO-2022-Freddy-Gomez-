import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './components/resumen/resumen.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  { path: "resumen", component: ResumenComponent },
  { path: "personajes", component: PersonajesComponent },
  { path: "frutas", component: FrutasComponent },
  { path: "peliculas", component: PeliculasComponent },
  { path: "**", redirectTo: "resumen" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
