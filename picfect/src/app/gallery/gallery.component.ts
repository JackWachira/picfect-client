import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {GalleryService} from './gallery.service';
import {GalleryItem} from './galleryitem';
import { HTTP_PROVIDERS } from '@angular/http';
import {CategoryPipe, OrderPipe} from './filter.pipe';
import {HomeService} from '../home/home.service';
import { Router } from '@angular/router';
import {CategoryItem} from '../category/categoryitem';


@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  directives: [
    MD_CARD_DIRECTIVES, MD_PROGRESS_CIRCLE_DIRECTIVES
  ],
  providers: [GalleryService, HTTP_PROVIDERS],
  pipes: [CategoryPipe, OrderPipe]
})
export class GalleryComponent implements OnInit {
  @Input() galleryItem: GalleryItem[];
  @Input() categoryId = 0;
  @Input() categoryName = "";
  @Output() imageSelect = new EventEmitter();
  loading = true;
  constructor(private router: Router, private galleryService: GalleryService, private homeService: HomeService) {
    this.homeService.getChangeEmitter().subscribe(item => this.onItemAdded(item));
    this.homeService.getCategoryEmitter().subscribe(item => this.onCategoryChanged(item));
  }
  onItemAdded(item: GalleryItem) {
    console.log("item added");
    console.log(item);
    
    this.galleryItem.push(item);
  }
  onCategoryChanged(item : CategoryItem){
    this.categoryId = item.id;
    this.categoryName = item.name;
  }
  ngOnInit() {
    this.galleryService.getRecentImages().subscribe(
      data => this.onReceiveImages(data),
      err => {
        this.onError(err);
      }
    );
  }
  onError(data){
    console.log(data.status);
    if(data.status == '401'){
        this.router.navigate(['']);
    }
  }
  onReceiveImages(images: any) {
    this.galleryItem = images;
    this.loading = false;
  }
  selectImage(image: GalleryItem) {
    this.homeService.triggerThumbnails(image);
    this.imageSelect.emit({
      value: image
    });
  }

}
