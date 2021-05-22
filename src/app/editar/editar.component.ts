import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nota } from '../shared/nota.model';
import { NotasService } from '../shared/notas.service';

interface estado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public nota: Nota=new Nota();
  idNota: number=-1;
  nuevo:boolean= false;

  constructor(private notasService: NotasService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.nota=new Nota();
      if(params.id){
        this.nota=this.notasService.getNotaAbierta(params.id);
        this.idNota=params.id;
        this.nuevo=false;
      } else{
        this.nuevo=true;
      }
    })
  }
  
  selectedValue: string | undefined;


  onSubmit(form:NgForm){
    
    if(form.value.titulo && form.value.estado &&  form.value.descripcion){
      if(this.nuevo){
        this.notasService.adicionar(form.value);
      } else{
        this.notasService.actualizar(this.idNota, form.value.titulo , form.value.estado, form.value.descripcion);
      }
        this.router.navigateByUrl('/lista');
    }
  }

}

