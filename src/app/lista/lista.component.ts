import { Component, OnInit } from '@angular/core';
import { Nota } from '../shared/nota.model';
import { NotasService } from '../shared/notas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  notas:Nota[] = new Array<Nota>();
  abiertas:Nota[]= new Array<Nota>();
  enProceso:Nota[]= new Array<Nota>();
  cerradas:Nota[]= new Array<Nota>();

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notas=this.notasService.getAll();
    this.abiertas=this.notasService.getAbiertas();
    this.enProceso=this.notasService.getEnProceso();
    this.cerradas=this.notasService.getCerradas();
  }
  deleteAbierta(id:number){
    this.notasService.eliminarAbiertas(id);
  }
  deleteEnProceso(id:number){
    this.notasService.eliminarEnProceso(id);
  }
  deleteCerrada(id:number){
    this.notasService.eliminarCerradas(id);
  }

}
