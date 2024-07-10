import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
  standalone: true
})
export class LanguagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case "en": {
        return "English"
      }
      case "ar": {
        return "العربية"
      }
      default: {
        return "English"
      }
    }
  }

}
