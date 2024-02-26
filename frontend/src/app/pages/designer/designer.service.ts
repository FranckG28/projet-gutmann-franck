import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class DesignerService {

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

}
