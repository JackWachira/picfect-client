import { Injectable } from '@angular/core';
import { Http, Headers, HTTP_PROVIDERS } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environment';
import {GalleryItem} from '../gallery/galleryitem'

@Injectable()
export class CanvasService {
    url: string;
    constructor(private http: Http) {
        this.url = environment.url;
    }

    // Api call to fetch all bucketlists
    getThumbnails(imageId: number): Observable<GalleryItem[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer facebook ' + localStorage.getItem('id_token'));
        return this.http.get(this.url + 'api/images/' + imageId + '/thumbnails/', {
            headers: headers
        })
            .map(res => res.json());
    }
}