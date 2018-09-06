import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {

    console.log(active);
    console.log(value);

    if(active){
      let maskedValue = "";
      for(let i = 0; i < value.length; i ++){
        maskedValue += "*";
      }

      return maskedValue;
    }
    return value;
  }

}
