import { Component, Input, OnInit, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota-cerrada',
  templateUrl: './nota-cerrada.component.html',
  styleUrls: ['./nota-cerrada.component.scss']
})
export class NotaCerradaComponent implements OnInit {

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
