import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { CreditCard } from '../../../models/credit-card';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
})
export class CardCreateComponent {

  formGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]),
    cvc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    expiration: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<CreditCard | undefined, void>,
  ) { }

  add(): void {

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const creditCard: CreditCard = {
      name: this.formGroup.value.name || '',
      number: this.formGroup.value.number || '',
      cvc: this.formGroup.value.cvc || '',
      expiration: this.formGroup.value.expiration || '',
    };
    this.context.completeWith(creditCard);
  }

  cancel(): void {
    this.context.completeWith(undefined);
  }

}
