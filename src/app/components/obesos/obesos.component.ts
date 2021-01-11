import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-obesos',
  templateUrl: './obesos.component.html',
  styleUrls: ['./obesos.component.css']
})
export class ObesosComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
