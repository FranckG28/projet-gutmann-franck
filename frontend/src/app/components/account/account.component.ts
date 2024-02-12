import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleComponent } from '../title/title.component';

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

  formData?: { [key: string]: string };
  firstName?: string;

  constructor(
    private readonly router: Router,
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state as Partial<AccountComponent>;

    if (!state) {
      this.router.navigate(['/'])
      return;
    }

    this.formData = state.formData;
    this.firstName = this.formData?.['firstName'] ?? '';
  }

}
