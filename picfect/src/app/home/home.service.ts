import {EventEmitter, Injectable} from '@angular/core';
import {GalleryItem} from '../gallery/galleryitem';
import {CategoryItem} from '../category/categoryitem';

@Injectable()
export class HomeService {
    public itemAdded$: EventEmitter<GalleryItem>;
    public triggerThumbnail$: EventEmitter<GalleryItem>;
    public categoryChanged$: EventEmitter<CategoryItem>;
    public triggerToast$: EventEmitter<Object>;

    constructor() {
        this.itemAdded$ = new EventEmitter<GalleryItem>();
        this.triggerThumbnail$ = new EventEmitter<GalleryItem>();
        this.categoryChanged$ = new EventEmitter<CategoryItem>();
        this.triggerToast$ = new EventEmitter<Object>();
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
    getCategoryEmitter() {
        return this.categoryChanged$;
    }
    public triggerThumbnails(item: GalleryItem):void{
        this.triggerThumbnail$.emit(item);
    }
    public changeCategory(item: CategoryItem):void{
        this.categoryChanged$.emit(item);
    }
    public showToast():void{
        this.triggerToast$.emit(Object);
    }


}
