import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditCard } from '../../../models/credit-card';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
})
export class CardPreviewComponent {

  @Input() card!: CreditCard;

}
