import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaComponent}from '../app/lista/lista.component'
import {NotasComponent}from"../app/notas/notas.component"
import {EditarComponent} from '../app/editar/editar.component'
import {NotaAbiertaComponent}from"../app/nota-abierta/nota-abierta.component"
import {NotaEnProcesoComponent} from "../app/nota-en-proceso/nota-en-proceso.component"
import {NotaCerradaComponent} from "../app/nota-cerrada/nota-cerrada.component"

const routes: Routes = [
  {path:'lista',component:ListaComponent},
  {path:'notas',component:NotasComponent},
  {path:'',component:EditarComponent},
  {path:':id',component:EditarComponent},
  {path:'notaAbierta',component:NotaAbiertaComponent},
  {path:'notaEnProceso',component:NotaEnProcesoComponent},
  {path:'notaCerrada',component:NotaCerradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
