import {EventEmitter, Injectable} from '@angular/core';
import {GalleryItem} from '../gallery/galleryitem';
import {CategoryItem} from '../category/categoryitem';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk/dist/index';

@Injectable()
export class HomeService {
    public itemAdded$: EventEmitter<GalleryItem>;
    public triggerThumbnail$: EventEmitter<GalleryItem>;
    public categoryChanged$: EventEmitter<CategoryItem>;
    public triggerToast$: EventEmitter<Object>;
    public deselect$: EventEmitter<Object>;
    public allImages: GalleryItem[];
    constructor(private fb: FacebookService) {
        this.itemAdded$ = new EventEmitter<GalleryItem>();
        this.triggerThumbnail$ = new EventEmitter<GalleryItem>();
        this.categoryChanged$ = new EventEmitter<CategoryItem>();
        this.triggerToast$ = new EventEmitter<Object>();
        this.deselect$ = new EventEmitter<Object>();
        let fbParams: FacebookInitParams = {
            appId: '1622731728039944',
            xfbml: true,
            cookie: true,
            version: 'v2.6'
        };
        this.fb.init(fbParams);

    }
    public getFb() {
        return this.fb;
    }
    public deselect(): void {
        this.deselect$.emit(Object);
    }
    public add(item: GalleryItem): void {
        this.itemAdded$.emit(item);
    }
    public addImages(item: GalleryItem[]) {
        this.allImages = item;
    }
    getChangeEmitter() {
        return this.itemAdded$;
    }
    getDeselectEmitter() {
        return this.deselect$;
    }
    getTriggerEmitter() {
        return this.triggerThumbnail$;
    }
    getCategoryEmitter() {
        return this.categoryChanged$;
    }
    public triggerThumbnails(item: GalleryItem): void {
        this.triggerThumbnail$.emit(item);
    }
    public changeCategory(item: CategoryItem): void {
        this.categoryChanged$.emit(item);
    }
    public showToast(): void {
        this.triggerToast$.emit(Object);
    }
    public getImages() {
        return this.allImages;
    }


}
