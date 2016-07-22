import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
  ],
})
export class GalleryComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  pictures: Object[] = [
    {name: "DSC6324.JPG"},
    {name: "DSC6234.JPG"},
    {name: "DSC8346.JPG"},
    {name: "DSC9027.JPG"},
    {name: "DSC9237.JPG"},
    {name: "DSC9372.JPG"}
  ];

}
