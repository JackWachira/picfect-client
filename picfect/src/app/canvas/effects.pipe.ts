import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from './filters';

@Pipe({
    name: 'effectsfilter',
    pure: false
})
export class EffectsPipe {

    // Retuns image filters matching query
    transform(filters, args?) {
        if (filters == null) {
            return filters;
        }
        let filtered = filters.filter((item: Filters) => item.effect != 'flip' && item.effect != 'mirror');
        for (var i=0; i < filtered.length; i++) {
            if (filtered[i].name.includes("app/media")) {
                filtered[i].name = filtered[i].name.replace("/app", "")
            }
        }
        return filtered;
    }
}