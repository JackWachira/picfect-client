import { Component, OnInit, Input } from '@angular/core';
import {GalleryComponent} from '../gallery';
import {CategoryComponent} from '../category';
import {CanvasComponent} from '../canvas';
import {MdToolbar} from '@angular2-material/toolbar';
import {GalleryItem} from '../gallery/galleryitem';
import { Router } from '@angular/router';
import {HomeService} from './home.service';
import {FacebookLoginStatus, FacebookLoginResponse, FacebookAuthResponse} from 'ng2-facebook-sdk/dist/index';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GalleryComponent, CategoryComponent, CanvasComponent, MdToolbar],

})
export class HomeComponent implements OnInit {
  public categoryId = 0;
  public categoryName = "";
  public selectedImage: GalleryItem;
  @Input() profName;
  @Input() profPic;
  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    this.profPic = localStorage.getItem('profPic');
    this.profName = localStorage.getItem('profName');
  }
  imageSelect(event) {
    this.selectedImage = event.value;
  }
  logout() {
    console.log(this.homeService.getFb());

    this.homeService.getFb().getLoginStatus().then((response: FacebookLoginResponse) => {
      console.log(response);
      if (response && response.status === 'connected') {
        this.homeService.getFb().logout().then(
          (response: FacebookAuthResponse) => {
            console.log(response);
            this.router.navigate(['']); 
          }
        );
      }

    });

  }

}
