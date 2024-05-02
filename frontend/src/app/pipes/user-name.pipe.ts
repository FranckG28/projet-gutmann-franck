import { Pipe, type PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'username',
  standalone: true,
})
export class UserNamePipe implements PipeTransform {

  transform(value: User | null | undefined): string {

    if (!value) {
      return '';
    }

    return `@${value.firstName}${value.lastName}`.toLowerCase();
  }

}
