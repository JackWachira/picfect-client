import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from './filters';

@Pipe({
    name: 'effectsfilter',
    pure: false
})
export class EffectsPipe {

    // Retuns image filters matching query
    transform(filters, args?) {
        console.log(filters);

        if (filters == null) {
            return filters;
        }
        return filters.filter((item: Filters) => item.effect != 'flip' && item.effect != 'mirror');
    }
}