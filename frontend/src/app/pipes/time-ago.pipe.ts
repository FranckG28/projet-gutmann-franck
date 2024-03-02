import { Pipe, type PipeTransform } from '@angular/core';
import { differenceInDays, format, formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const currentDate = new Date();
    const date = new Date(value);

    if (currentDate.getFullYear() !== date.getFullYear()) {
      return format(date, 'd MMM yyyy');
    } else if (differenceInDays(currentDate, date) > 7) {
      return format(date, 'd MMM');
    } else {
      return formatDistanceToNow(date, { addSuffix: true });
    }
  }

}
