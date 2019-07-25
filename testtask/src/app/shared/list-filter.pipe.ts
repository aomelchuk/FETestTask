import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }


    return items.filter(item => {
      let nameUpper = item.name.toUpperCase();
      let skuUpper = item.sku.toUpperCase();
      return (nameUpper.indexOf(filter.toUpperCase()) !== -1) || (skuUpper.indexOf(filter.toUpperCase()) !== -1)
    });
  }

}
