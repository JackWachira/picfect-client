/// <reference path='../../../typings/fbsdk/fbsdk.d.ts'/>
/// <reference path='../../../typings/jquery/jquery.d.ts'/>

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $: JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('appname') el: ElementRef;
  constructor() { }

  ngOnInit() {
    FB.init(
      {
        appId: '1622731728039944',
        xfbml: true,
        version: 'v2.0'
      }
    );
  }
  ngAfterViewInit() {
    $(this.el.nativeElement).delay(1000).animate({ "opacity": "1" }, 1700);
  }
  static loginResponse(response: any) {
    status = response['status'];
    if (status == 'connected') {
      let access_token = response['authResponse']['accessToken'];
      localStorage.setItem('id_token', access_token);
    }
  }
  login() {
    FB.login(function (response) {
      console.log(response);
      AuthComponent.loginResponse(response);
    });
  }
}
