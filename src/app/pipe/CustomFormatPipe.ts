import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFormat',
  standalone: true // Hacer el pipe standalone
})
export class CustomFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    // Reemplaza 'a' y 'o' por 'x' 
    return value
      .replace(/[ao]/gi, 'x')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}