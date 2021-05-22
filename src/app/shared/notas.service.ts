import { Injectable } from '@angular/core';
import { Nota } from './nota.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  notas:Nota[]= new Array<Nota>();
  abiertas:Nota[]= new Array<Nota>();
  enProceso:Nota[]= new Array<Nota>();
  cerradas:Nota[]= new Array<Nota>();

  constructor() { }
  
  getAll(){
    return this.notas;
  }

  getAbiertas(){
    return this.abiertas;
  }

  getEnProceso(){
    return this.enProceso;
  }

  getCerradas(){
    return this.cerradas;
  }

  get(id:number){
    return this.notas[id];
  }

  getNotaAbierta(id:number){
    return this.notas[id];
  }

  getNotaEnProceso(id:number){
    return this.notas[id];
  }

  getNotaCerrada(id:number){
    return this.notas[id];
  }

  getId(nota:Nota){
    return this.notas.indexOf(nota);
  }

  adicionar(nota:Nota){
    let newLength = this.notas.push(nota);
    if(nota.estado == 'abierto'){
      this.abiertas.push(nota)
    }else 
    if(nota.estado == 'proceso'){
      this.enProceso.push(nota)
    }else 
    if(nota.estado == 'cerrado'){
      this.cerradas.push(nota)
    }
    let index = newLength - 1;
    return index;
  }

  actualizar(id:number, titulo:string ,estado:string ,descripcion:string ){
    let nota=this.notas[id];
    nota.titulo=titulo;
    nota.estado=estado;
    nota.descripcion=descripcion;
  }

  eliminar(id:number){
    this.notas.splice(id,1);
  }
  eliminarAbiertas(id:number){
    this.abiertas.splice(id,1);
  }
  eliminarEnProceso(id:number){
    this.enProceso.splice(id,1);
  }
  eliminarCerradas(id:number){
    this.cerradas.splice(id,1);
  }

}
