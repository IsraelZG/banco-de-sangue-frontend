import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idade-media',
  templateUrl: './idade-media.component.html',
  styleUrls: ['./idade-media.component.css']
})
export class IdadeMediaComponent implements OnInit {

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
