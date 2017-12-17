import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPip'
})
export class CustomPipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('Pipe parameters');
    console.log(args);
    console.log('Value to be transformed');
    console.log(value);
    // Sorting logic.
    let arr: Array<{id: number, name: string, sequence: number}> = value;
    let temp: any = null;
    for (let i = 0; i < arr.length ; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].sequence > arr[j + 1].sequence) {
          temp = arr[j];
          arr[j] = arr[ j + 1 ];
          arr[j + 1] = temp;
        }
      }
    }
    value = arr;
    console.log('Value after sorting');
    console.log(value);
    return value;
  }

}
