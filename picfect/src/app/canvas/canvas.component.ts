import { Component, OnInit, Input, NgZone } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {GalleryItem} from '../gallery/galleryitem';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';

const URL = 'http://localhost:8000/api/images/3';
@Component({
  moduleId: module.id,
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  directives: [UPLOAD_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class CanvasComponent implements OnInit {
  @Input() selectedImage: GalleryItem;
  uploadFile: any;
  uploadProgress: number;
  uploadResponse: Object;
  constructor() {
    this.uploadProgress = 0;
    this.uploadResponse = {};
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  filters: Object[] = [
    { name: "Contrast" },
    { name: "Grayscale" },
    { name: "Invert" },
    { name: "Detail" },
    { name: "Emboss" },
    { name: "Emboss" },
    { name: "Emboss" },
    { name: "Emboss" },
  ];
  options: Object = {
    url: URL,
    withCredentials: true,
    authToken: localStorage.getItem('id_token'),
    authTokenPrefix: "Bearer facebook ",
    fieldName: 'original_image'
  };
  zone: NgZone;
  ngOnInit() {

  }
  handleUpload(data): void {
    this.uploadFile = data;
    this.zone.run(() => {
      this.uploadProgress = data.progress.percent;
    });
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }


}
