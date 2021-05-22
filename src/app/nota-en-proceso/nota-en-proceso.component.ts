import { Component, Input, OnInit, ViewChild,ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nota-en-proceso',
  templateUrl: './nota-en-proceso.component.html',
  styleUrls: ['./nota-en-proceso.component.scss']
})
export class NotaEnProcesoComponent implements OnInit {

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
