import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, field:string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    if (searchText === undefined) return [];
    searchText = searchText.toLowerCase();
  return items.filter(singleItem =>
    JSON.stringify(singleItem).toLowerCase().includes(searchText.toLowerCase()));

  }
}
