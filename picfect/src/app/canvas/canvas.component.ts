/// <reference path='../../../typings/jquery/jquery.d.ts'/>

import { Component, OnInit, AfterViewInit, Input, NgZone, Output, EventEmitter } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {GalleryItem} from '../gallery/galleryitem';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';
import {HomeService} from '../home/home.service';
import {CanvasService} from '../canvas/canvas.service';
import {Filters} from './filters';
import { environment } from '../environment';
import {CategoryComponent} from '../category/category.component';
import {CategoryItem} from '../category/categoryitem';
import {EffectsPipe} from './effects.pipe';
declare var $: JQueryStatic;


const URL = 'http://localhost:8000/api/images/3';
@Component({
  moduleId: module.id,
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  directives: [UPLOAD_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [CanvasService],
  pipes: [EffectsPipe]
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @Input() selectedImage: GalleryItem;
  @Input() selectedImageProperties: GalleryItem;
  @Input() imageUploaded: boolean;
  @Output() imageReady = new EventEmitter();
  @Input() categoryId: number = 0;
  @Input() options: Object = {
    url: 'http://localhost:8000/api/images/',
    // withCredentials: true,
    authToken: localStorage.getItem('id_token'),
    authTokenPrefix: "Bearer facebook ",
    fieldName: 'original_image'
  };
  uploadFile: any;
  imageDropped = false;
  uploadProgress: number;
  uploadResponse: Object;
  dropProgress: number = 0;
  dropResp: any[] = [];
  filters: Filters;
  selectedFilter: Filters;
  server_url = "";

  constructor(private homeService: HomeService, private canvasService: CanvasService) {
    this.uploadProgress = 0;
    this.uploadResponse = {};
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.imageUploaded = false;
    this.server_url = environment.url;
    this.homeService.getTriggerEmitter().subscribe(item => this.onTriggerThumbnail(item));
    this.homeService.getCategoryEmitter().subscribe(item => this.onCategoryChanged(item));
  }
  showDetails(item: GalleryItem) {
    var self = this;
    this.selectedImageProperties = item;
    this.selectedImageProperties.name = item.original_image.substring(item.original_image.lastIndexOf('/') + 1, item.original_image.length)
    var img = new Image();
    img.onload = function () {
      self.selectedImageProperties.size = this.width + ' x ' + this.height + ' px';
    }
    img.src = item.original_image;
    this.selectedImageProperties.date_created = this.getSimpleDate(item.date_created);
    this.selectedImageProperties.date_modified = this.getSimpleDate(item.date_modified);
    this.selectedImageProperties.uploader = localStorage.getItem('profName')
  }
  getSimpleDate(dateString: any) {
    var date = new Date(dateString);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dateStr = month + "/" + day + "/" + year;
    return dateStr;
  }
  onTriggerThumbnail(item: GalleryItem) {
    this.imageUploaded = true;
    this.getThumbnails(item.id);
  }
  onCategoryChanged(item: CategoryItem) {
    this.categoryId = item.id;
  }
  getThumbnails(imageId: number) {
    this.canvasService.getThumbnails(imageId).subscribe(
      data => this.onReceiveThumbnails(data),
      err => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    $(function () {
      $("h2")
        .wrapInner("<span>")
      $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");
    });
  }
  promptCategorySelect() {
    this.homeService.showToast();
  }
  onReceiveThumbnails(data) {
    this.filters = data;

  }
  updateImage(imageId, categoryId) {
    this.canvasService.updateImage(imageId, categoryId).subscribe(
      data => {
        this.homeService.add(data);

      },
      err => {
        console.log(err);
      }
    );
  }

  zone: NgZone;
  ngOnInit() {

  }
  transformImage(tranformation: string) {
    if (tranformation == "flip") {
      this.selectedImage = new GalleryItem();
      this.selectedImage.id = this.filters[10].id;
      this.selectedImage.name = "";
      this.selectedImage.original_image = this.server_url + this.filters[10].name;
      this.selectedImage.edited_image = "";
      this.selectedImage.date_created = "";
      this.selectedImage.date_modified = "";
      this.selectedImage.category = this.categoryId;
      this.selectedImage.uploader = 1;
    } else {
      this.selectedImage = new GalleryItem();
      this.selectedImage.id = this.filters[8].id;
      this.selectedImage.name = "";
      this.selectedImage.original_image = this.server_url + this.filters[8].name;
      this.selectedImage.edited_image = "";
      this.selectedImage.date_created = "";
      this.selectedImage.date_modified = "";
      this.selectedImage.category = this.categoryId;
      this.selectedImage.uploader = 1;
    }
  }
  openFile(e) {
    e.preventDefault();
    $("#upload").trigger('click');
  }
  applyFilter(filter: Filters) {
    this.selectedFilter = filter;
    this.selectedImage = new GalleryItem();
    this.selectedImage.id = filter.id;
    this.selectedImage.name = "";
    this.selectedImage.original_image = this.server_url + filter.name;
    this.selectedImage.edited_image = "";
    this.selectedImage.date_created = "";
    this.selectedImage.date_modified = "";
    this.selectedImage.category = this.categoryId;
    this.selectedImage.uploader = 1;
  }
  shareImage() {
    FB.ui({
      method: 'share',
      href: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
    }, function (response) { });
  }
  saveEffect() {
    this.canvasService.saveEffect(this.selectedFilter.id, this.selectedImage.category).subscribe(
      data => this.onSaveEffect(data),
      err => {
        console.log(err);
      }
    );
  }
  onSaveEffect(data) {
    this.homeService.add(data);
  }
  handleUpload(data): void {
    this.imageDropped = true;
    this.uploadFile = data;
    this.zone.run(() => {
      this.uploadProgress = data.progress.percent;
    });

    if (data && data.response) {

      this.imageDropped = false;
      this.uploadProgress = 0;
      data = JSON.parse(data.response);
      this.uploadFile = data;
      this.imageUploaded = true;
      this.selectedImage = data;
      this.updateImage(data.id, this.categoryId);
      this.getThumbnails(data.id);
    }
  }
  loadFilters() {

  }


}
