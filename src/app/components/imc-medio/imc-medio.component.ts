import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-medio',
  templateUrl: './imc-medio.component.html',
  styleUrls: ['./imc-medio.component.css']
})
export class ImcMedioComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
