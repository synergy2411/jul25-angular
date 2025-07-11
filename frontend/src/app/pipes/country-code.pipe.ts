import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, code?: string) {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'ENG':
        return '+44 ' + value;
      case 'AUS':
        return '+61 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}

// 9876543210 | countryCode

// Reverse the String : value.split("").reverse().join("");
