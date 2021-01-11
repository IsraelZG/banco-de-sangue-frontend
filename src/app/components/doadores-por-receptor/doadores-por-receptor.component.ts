import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doadores-por-receptor',
  templateUrl: './doadores-por-receptor.component.html',
  styleUrls: ['./doadores-por-receptor.component.css']
})
export class DoadoresPorReceptorComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
