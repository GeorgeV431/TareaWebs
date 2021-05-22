import {Component, Input, OnInit, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota-abierta',
  templateUrl: './nota-abierta.component.html',
  styleUrls: ['./nota-abierta.component.scss']
})
export class NotaAbiertaComponent implements OnInit {
  
  @Input() titulo:string | undefined; 
  @Input() estado:string | undefined;
  @Input() descripcion :string | undefined;

  @Output('delete') deleteEvent:EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  
  }
  onButtonClick(){
    this.deleteEvent.emit(); 
  }
}
