import { Injectable } from '@angular/core';
import { Http, Headers, HTTP_PROVIDERS } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {GalleryItem} from './galleryitem'

@Injectable()
export class GalleryService {
    constructor(private http: Http) {
    }

    // Api call to fetch all bucketlists
    getRecentImages(): Observable<GalleryItem[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer facebook ' + localStorage.getItem('id_token'));
        return this.http.get('http://localhost:8000/api/images/', {
            headers: headers
        })
            .map(res => res.json());
    }
}