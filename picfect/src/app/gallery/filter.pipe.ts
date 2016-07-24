import { Pipe, PipeTransform } from '@angular/core';
import { GalleryItem } from './galleryitem';

@Pipe({
    name: 'categoryfilter',
    pure: false
})
export class CategoryPipe {

    // Retuns gallery matching query
    transform(gallery, args?) {
        let categoryId = args;
        if (gallery == null || categoryId == 0) {
            return gallery;
        }        
        return gallery.filter((item: GalleryItem) => item.category == categoryId);
    }
}