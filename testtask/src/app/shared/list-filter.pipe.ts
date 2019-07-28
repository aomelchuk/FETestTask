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
      let nameUpper = item.name;
      let skuUpper = item.sku;
      return (nameUpper.toUpperCase().indexOf(filter.toUpperCase()) !== -1) || (skuUpper.toUpperCase().indexOf(filter.toUpperCase()) !== -1)
    });
  }

}
