import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search:string=''): any {
  //  return value.filter(function(search){
  //   return search.name.indexof(searchTerm)> -1
  //  })
  }
 

}
