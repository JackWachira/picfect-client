import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {GalleryService} from './gallery.service';
import {GalleryItem} from './galleryitem';
import { HTTP_PROVIDERS } from '@angular/http';
import {CategoryPipe} from './filter.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
  ],
  providers: [GalleryService, HTTP_PROVIDERS],
  pipes: [CategoryPipe]
})
export class GalleryComponent implements OnInit {
  @Input() galleryItem: GalleryItem[];
  @Input() categoryId = 0;
  @Input() categoryName = "";
  @Output() imageSelect = new EventEmitter();
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getRecentImages().subscribe(
      data => this.onReceiveImages(data),
      err => {
        console.log(err);
      }
    );
  }
  onReceiveImages(images: any) {
    this.galleryItem = images;
  }
  selectImage(image: GalleryItem){
    this.imageSelect.emit({
      value: image
    });
  }

}
