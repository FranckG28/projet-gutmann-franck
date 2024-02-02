import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiElasticContainerModule, TuiInputDateModule, TuiInputModule, TuiInputPhoneInternationalModule, TuiStepperModule } from '@taiga-ui/kit';

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
    TuiInputDateModule,
    TuiElasticContainerModule
  ],
  templateUrl: './signup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {

  step = 0;
  maxStep = 2;

  formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
  })

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

}
