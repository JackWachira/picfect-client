import { Component, OnInit, Input, NgZone, Output, EventEmitter } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {GalleryItem} from '../gallery/galleryitem';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';
import {HomeService} from '../home/home.service';
import {CanvasService} from '../canvas/canvas.service';
import {Filters} from './filters';

const URL = 'http://localhost:8000/api/images/3';
@Component({
  moduleId: module.id,
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  directives: [UPLOAD_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [CanvasService]
})
export class CanvasComponent implements OnInit {
  @Input() selectedImage: GalleryItem;
  @Input() imageUploaded: boolean;
  @Output() imageReady = new EventEmitter();
  uploadFile: any;
  uploadProgress: number;
  uploadResponse: Object;
  dropProgress: number = 0;
  dropResp: any[] = [];
  filters : Filters;
  constructor(private homeService: HomeService, private canvasService: CanvasService) {
    this.uploadProgress = 0;
    this.uploadResponse = {};
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.imageUploaded = false;
  }
  getThumbnails(imageId:number){
    this.canvasService.getThumbnails(imageId).subscribe(
      data => this.onReceiveThumbnails(data),
      err => {
        console.log(err);
      }
    );
  }
  onReceiveThumbnails(data){
    this.filters = data;
  }

  options: Object = {
    url: URL,
    // withCredentials: true,
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
      this.imageUploaded = true;
      // this.uploadFile = null;
      this.homeService.add(data);
      this.getThumbnails(data.id);
    }
  }
  loadFilters(){

  }
  handleDropUpload(data): void {
    let index = this.dropResp.findIndex(x => x.id === data.id);
    if (index === -1) {
      this.dropResp.push(data);
    }
    else {
      this.zone.run(() => {
        this.dropResp[index] = data;
      });
    }

    let total = 0, uploaded = 0;
    this.dropResp.forEach(resp => {
      total += resp.progress.total;
      uploaded += resp.progress.loaded;
    });

    this.dropProgress = Math.floor(uploaded / (total / 100));
    this.imageUploaded = true;

  }


}
