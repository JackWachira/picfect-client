import {EventEmitter, Injectable} from '@angular/core';
import {GalleryItem} from '../gallery/galleryitem'

@Injectable()
export class HomeService {
    public itemAdded$: EventEmitter<GalleryItem>;
    public triggerThumbnail$: EventEmitter<GalleryItem>;

    constructor() {
        this.itemAdded$ = new EventEmitter<GalleryItem>();
        this.triggerThumbnail$ = new EventEmitter<GalleryItem>();
    }
    public add(item: GalleryItem): void {
        console.log(item);

        this.itemAdded$.emit(item);
    }
    getChangeEmitter() {
        return this.itemAdded$;
    }
    getTriggerEmitter() {
        return this.triggerThumbnail$;
    }
    public triggerThumbnails(item: GalleryItem):void{
        this.triggerThumbnail$.emit(item);
    }
}
