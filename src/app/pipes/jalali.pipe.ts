import { Pipe, PipeTransform } from '@angular/core';

import moment from 'jalali-moment';

@Pipe({
  name: 'jalali',
  standalone: true,
})
export class jalaliPipe implements PipeTransform {
  transform(value: string, format: string = 'DD-MM-YYYY'): string {
    let MomentDate = moment(value);
    return MomentDate.format(format);
  }
}
