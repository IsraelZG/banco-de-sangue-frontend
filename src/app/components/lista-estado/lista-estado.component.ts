import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.css']
})
export class ListaEstadoComponent implements OnInit {

  @Input() data = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
