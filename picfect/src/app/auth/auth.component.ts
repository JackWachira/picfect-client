/// <reference path='../../../typings/fbsdk/fbsdk.d.ts'/>
/// <reference path='../../../typings/jquery/jquery.d.ts'/>

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk/dist/index';
declare var $: JQueryStatic;


@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  providers: [FacebookService]
})
export class AuthComponent implements AfterViewInit {

  @ViewChild('appname') el: ElementRef;
  constructor(private router: Router, private fb: FacebookService) {
    let fbParams: FacebookInitParams = {
      appId: '1622731728039944',
      xfbml: true,
      version: 'v2.6'
    };
    this.fb.init(fbParams);
  }
  ngAfterViewInit() {
    $(this.el.nativeElement).delay(1000).animate({ "opacity": "1" }, 1700);
  }
  public login() {
    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        console.log(response);
        status = response['status'];
        if (status == 'connected') {
          let access_token = response['authResponse']['accessToken'];
          localStorage.setItem('id_token', access_token);
          this.router.navigate(['/home']);
        }
      },
      (error: any) => console.error(error)
    );
  }
}
