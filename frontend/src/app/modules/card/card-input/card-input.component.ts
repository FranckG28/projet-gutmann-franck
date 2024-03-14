import { Component, Inject, Injector, Input, Output } from '@angular/core';
import { CardService } from '../card.service';
import { CreditCard } from '../../../models/credit-card';
import { TuiDialogService } from '@taiga-ui/core';
import { CardCreateComponent } from '../card-create/card-create.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
})
export class CardInputComponent {

  formControl = new FormControl(this.selectedCard);
  cards$ = this.cardService.cards$;

  @Input() selectedCard?: CreditCard;
  @Output() selectedCardChange = this.formControl.valueChanges;


  constructor(
    private readonly cardService: CardService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {

    // Todo : for debug only, to remove later
    this.selectedCardChange.subscribe((card) => {
      console.log('CardInputComponent.selectedCardChange', card);
    });


  }

  addCard(): void {
    this.dialogs.open<CreditCard>(new PolymorpheusComponent(CardCreateComponent, this.injector), {
      label: 'Ajouter une carte',
    }).subscribe((card: CreditCard | undefined) => {

      if (card) {
        this.cardService.addCard(card);
      }

    })
  }

  removeCard(card: CreditCard): void {
    this.cardService.removeCard(card);
  }

}
