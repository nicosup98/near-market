import { Pipe, PipeTransform } from '@angular/core';
import { formatNearAmount } from 'near-api-js/lib/utils/format';

@Pipe({
  name: 'formatNear'
})
export class FormatNearPipe implements PipeTransform {

  transform(value: string): string {
    return formatNearAmount(value,2)
  }

}
