import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserState } from '../../store/user.state';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  templateUrl: './account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {

  @Select(UserState.user) user$!: Observable<User>;

}
