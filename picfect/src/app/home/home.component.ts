import { Component, OnInit } from '@angular/core';
import {GalleryComponent} from '../gallery';
import {CategoryComponent} from '../category';
import {CanvasComponent} from '../canvas';
import {MdToolbar} from '@angular2-material/toolbar';
import {GalleryItem} from '../gallery/galleryitem'


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GalleryComponent, CategoryComponent, CanvasComponent, MdToolbar]
})
export class HomeComponent implements OnInit {
  public categoryId = 0;
  public categoryName = "";
  public selectedImage: GalleryItem;
  constructor() {}

  ngOnInit() {
  }
  categoryChange(event) {
    this.categoryId = event.value['categoryId'];
    this.categoryName = event.value['categoryName'];
  }
  imageSelect(event) {
    this.selectedImage = event.value;
  }

}
