import { Component, OnInit, Input } from '@angular/core';
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
  pictures: Object[] = [
    { name: "DSC6324.JPG" },
    { name: "DSC6234.JPG" },
    { name: "DSC8346.JPG" },
    { name: "DSC9027.JPG" },
    { name: "DSC9237.JPG" },
    { name: "DSC9372.JPG" }
  ];

}
