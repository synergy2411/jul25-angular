import { Pipe, PipeTransform } from '@angular/core';

interface ITodo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: ITodo[], filteredStatus: string): Array<ITodo> {
    console.log('[TRANSFORM]');

    if (filteredStatus === '') {
      return value;
    }

    let resultArray = [];
    for (let todo of value) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
