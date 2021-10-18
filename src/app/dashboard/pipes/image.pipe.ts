import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(id: number): string {
    return `assets/img/planeta${ id }.jpg`;
  }

}
