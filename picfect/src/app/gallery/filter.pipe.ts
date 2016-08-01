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

@Pipe({
    name: 'sortfilter',
    pure: false
})
export class OrderPipe {

    // Returns gallery matching query
    transform(gallery, args?) {
        if (gallery == null) {
            return gallery;            
        }
        return gallery.sort(function (a, b) {
            return (a.date_modified < b.date_modified) ? 1 : ((a.date_modified > b.date_modified) ? -1 : 0);
        });     
    }
    compare(a, b) {
        var time = new Date(a.date_created).toLocaleString();
        console.log(time);
        if (a.date_created < b.date_created)
            return -1;
        if (a.date_created > b.date_created)
            return 1;
        return 0;
    }


}