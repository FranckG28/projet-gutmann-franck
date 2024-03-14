import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreditCard } from '../../models/credit-card';

@Injectable()
export class CardService {

  cards$ = new BehaviorSubject<CreditCard[]>([]);

  constructor() { }

  addCard(card: CreditCard): void {
    this.cards$.next([...this.cards$.value, card]);
  }

  removeCard(card: CreditCard): void {
    this.cards$.next(this.cards$.value.filter(c => c !== card));
  }

}
