//// <reference path="../../typings/main/ambient/node/index.d.ts"

import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styles: [`
    .fill-space { 
       flex: 1 1 auto;
    }
    .img-circle{
      width: 30px;
      height: 30px;
      border:1px solid white;
      border-radius: 30px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px; 
    }
    #user-name{
      margin-right: 10px;
      font-size: 15px;
    }
  `],
  directives: [
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [MdIconRegistry, HTTP_PROVIDERS],
})
export class AppComponent {
  title = 'Picfect';
}
