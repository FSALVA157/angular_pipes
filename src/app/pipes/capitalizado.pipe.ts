import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean=true): string {
    if(todas){
      let palabras: string[] = value.split(' ');
      palabras = palabras.map(palabra => {
        return palabra[0].toUpperCase() + palabra.substring(1);
      });
      return palabras.join(' ');
    }else{
      return value[0].toUpperCase() + value.substring(1);
    }
  }

}
