import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string | null): string | null {
    if(!value) return null
    return `https://icherniakov.ru/yt-course/${value}`;
  }

}
