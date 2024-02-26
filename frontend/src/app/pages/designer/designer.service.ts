import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class DesignerService {

  readonly MAX_INGREDIENTS = 20;

  items: Ingredient[] = [{
    name: 'Bread',
    price: 1,
    description: 'Whole wheat bread',
    image: 'bread.jpg',
  }];

  constructor() { }

  delete(index: number): void {
    this.items.splice(index, 1);
  }

  add(ingredient: Ingredient): void {
    if (this.items.length < this.MAX_INGREDIENTS) {
      this.items.push(ingredient);
    }
  }

}
