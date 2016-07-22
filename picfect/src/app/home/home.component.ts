import { Component, OnInit } from '@angular/core';
import {GalleryComponent} from '../gallery'
import {CategoryComponent} from '../category'
import {CanvasComponent} from '../canvas'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GalleryComponent, CategoryComponent, CanvasComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
