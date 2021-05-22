import { Component, Input, OnInit, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';
let thing:any = document.getElementById("card");

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  
  @Input() titulo:string | undefined; 
  @Input() estado:string | undefined;
  @Input() descripcion :string | undefined;

  @Output('delete') deleteEvent:EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
    thing.style.backgroundColor = "black";
  }
  onButtonClick(){
    this.deleteEvent.emit(); 
  }

}
