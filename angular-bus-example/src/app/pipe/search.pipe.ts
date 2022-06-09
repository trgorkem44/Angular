import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], filterText: string): any[] {
    if (!filterText) {
      return list
    } else {
      return list.filter(item => item.nameSurname.toLowerCase().includes(filterText))

    }

  }

}
