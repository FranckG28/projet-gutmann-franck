import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { Router, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngxs/store';
import { SetUser } from '../../store/user.state';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    RouterModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isLoading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string | null>(null);

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly store: Store,
  ) { }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;

    if (!email || !password) {
      return;
    }

    this.isLoading$.next(true);
    this.error$.next(null);
    this.auth.login(email, password)
      .pipe(
        catchError((error) => {
          this.isLoading$.next(false);
          this.error$.next(error);
          return of(null);
        }
        )).subscribe((user) => {
          if (!user) {
            return;
          }
          this.store.dispatch(new SetUser(user));
          this.router.navigate(['/']);
        });
  }

}
