import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiComboBoxModule, TuiDataListWrapperModule, TuiElasticContainerModule, TuiFilterByInputPipeModule, TuiInputDateModule, TuiInputModule, TuiInputPhoneInternationalModule, TuiStepperModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiInputPhoneInternationalModule,
    TuiStepperModule,
    TuiButtonModule,
    TuiElasticContainerModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule
  ],
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {

  step = 0;
  maxStep = 2;

  countries = Object.values(TuiCountryIsoCode)

  countryIsoCode = TuiCountryIsoCode.FR;

  formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    country: new FormControl(this.countryIsoCode, Validators.required),
  })

  controlsByStep = [
    ['firstName', 'lastName', 'email', 'phone'],
    ['address', 'city', 'zipCode', 'country'],
    ['password', 'passwordConfirm']
  ]

  next() {
    if (this.step < this.maxStep) {
      this.step++;
    }

    if (this.step === this.maxStep) {
      console.log('Form submitted');
    }

  }

  onSubmit() {
    console.log(this.formGroup.value);
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

}
