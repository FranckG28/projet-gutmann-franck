import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiAlertService, TuiButtonModule, TuiErrorModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TUI_COUNTRIES, TuiComboBoxModule, TuiDataListWrapperModule, TuiElasticContainerModule, TuiFieldErrorPipeModule, TuiFilterByInputPipeModule, TuiInputModule, TuiInputPhoneInternationalModule, TuiStepperModule } from '@taiga-ui/kit';
import { confirmPasswordValidator } from '../../validators/confirmPassword.validator';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { TuiLetModule, TuiMapperPipeModule } from '@taiga-ui/cdk';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Signup } from '../../models/signup';
import { Store } from '@ngxs/store';
import { SetUser } from '../../store/user.state';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiLetModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiInputPhoneInternationalModule,
    TuiStepperModule,
    TuiButtonModule,
    TuiElasticContainerModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiHintModule,
    TuiMapperPipeModule,
  ],
  templateUrl: './signup-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent {

  PASSWORD_MIN_LENGTH = 8;

  step = 0;
  maxStep = 2;

  countries = Object.values(TuiCountryIsoCode)

  countryIsoCode = TuiCountryIsoCode.FR;

  formGroup = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]),
    passwordConfirm: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    zipCode: new FormControl<string>('', Validators.required),
    country: new FormControl<string>('', Validators.required),
  }, {
    validators: confirmPasswordValidator
  });

  controlsByStep = [
    ['firstName', 'lastName', 'email', 'phone'],
    ['address', 'city', 'zipCode', 'country'],
    ['password', 'passwordConfirm']
  ]

  isLoading$ = new BehaviorSubject<boolean>(false);

  private readonly auth = inject(AuthService);
  private readonly store = inject(Store);

  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    @Inject(TUI_COUNTRIES) readonly countriesNames$: Observable<Record<TuiCountryIsoCode, string>>,
    private readonly router: Router
  ) { }


  next() {
    if (this.step === this.maxStep) {
      this.onSubmit();
      return;
    }
    this.step++;
  }

  onSubmit() {

    this.isLoading$.next(true);

    try {

      if (this.formGroup.invalid) {
        throw new Error('Le formulaire contient des erreurs');
      }

      this.auth.signup(this.formGroup.value as Signup)
        .pipe(
          catchError((error) => {
            if (error.status === 400) {
              throw new Error('Email déjà utilisé');
            }
            throw error;
          })
        )
        .subscribe((user) => {
          this.store.dispatch(new SetUser(user));
          this.router.navigate(['/app/account']);
        });


    } catch (error) {
      console.error(error);
      this.alerts.open((error as Error).message ?? 'Une erreur est survenue', { status: 'error' }).subscribe();
    } finally {
      this.isLoading$.next(false);
    }

  }

  getStepStatus(step: number): 'pass' | 'error' | 'normal' {
    const controlNames = this.controlsByStep[step];
    const controls = controlNames.map(control => this.formGroup.get(control));

    const hasError = controls.some(control =>
      control?.touched && control?.invalid);

    if (hasError) {
      return 'error';
    }

    const hasValue = controls.some(control => control?.touched && control?.value)

    if (hasValue) {
      return 'pass';
    }

    return 'normal';
  }

  countryNameMapper: (isoCodes: TuiCountryIsoCode[], countryNames: Record<TuiCountryIsoCode, string>) => string[] = (isoCodes, countryNames) =>
    isoCodes.map(code => countryNames[code]);

}
