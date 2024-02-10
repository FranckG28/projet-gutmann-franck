import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiAlertService, TuiButtonModule, TuiErrorModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TUI_COUNTRIES, TuiComboBoxModule, TuiDataListWrapperModule, TuiElasticContainerModule, TuiFieldErrorPipeModule, TuiFilterByInputPipeModule, TuiInputModule, TuiInputPhoneInternationalModule, TuiStepperModule } from '@taiga-ui/kit';
import { confirmPasswordValidator } from '../../validators/confirmPassword.validator';
import { BehaviorSubject, Observable } from 'rxjs';
import { TuiLetModule, TuiMapperPipeModule } from '@taiga-ui/cdk';

@Component({
  selector: 'app-signup',
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
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {

  PASSWORD_MIN_LENGTH = 8;

  step = 0;
  maxStep = 2;

  countries = Object.values(TuiCountryIsoCode)

  countryIsoCode = TuiCountryIsoCode.FR;

  formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]),
    passwordConfirm: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  }, {
    validators: confirmPasswordValidator
  });

  controlsByStep = [
    ['firstName', 'lastName', 'email', 'phone'],
    ['address', 'city', 'zipCode', 'country'],
    ['password', 'passwordConfirm']
  ]

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    @Inject(TUI_COUNTRIES) readonly countriesNames$: Observable<Record<TuiCountryIsoCode, string>>,
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
      console.log('Form submitted', this.formGroup.value);

      if (this.formGroup.invalid) {
        throw new Error('Le formulaire contient des erreurs');
      }

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
