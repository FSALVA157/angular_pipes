import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'secureDOM'
})
export class SecureDOMPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ){}

  transform(value: string, ...args: unknown[]): unknown {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
