import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  moduleId: module.id,
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
  ],
})
export class CanvasComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  filters: Object[] = [
    {name: "Contrast"},
    {name: "Grayscale"},
    {name: "Invert"},
    {name: "Detail"},
    {name: "Emboss"},
    {name: "Emboss"},
    {name: "Emboss"},
    {name: "Emboss"},
  ];

}
