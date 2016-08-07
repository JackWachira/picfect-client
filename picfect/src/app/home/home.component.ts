import { Component, OnInit,Input } from '@angular/core';
import {GalleryComponent} from '../gallery';
import {CategoryComponent} from '../category';
import {CanvasComponent} from '../canvas';
import {MdToolbar} from '@angular2-material/toolbar';
import {GalleryItem} from '../gallery/galleryitem';
import { Router } from '@angular/router';




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
  @Input() profName;
  @Input() profPic;
  constructor(private router: Router) {}

  ngOnInit() {
    this.profPic=localStorage.getItem('profPic');
    this.profName=localStorage.getItem('profName');
  }
  imageSelect(event) {
    this.selectedImage = event.value;
    console.log(this.selectedImage);
  }
  logout(){
    this.router.navigate(['']);
  }

}
