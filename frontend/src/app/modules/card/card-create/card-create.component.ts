import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { CreditCard } from '../../../models/credit-card';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
})
export class CardCreateComponent {

  formGroup = this.formBuilder.group({
    name: '',
    number: '',
    cvc: '',
    expiration: '',
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<CreditCard | undefined, void>,
  ) { }

  add(): void {
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
