import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Injectable()
export class DesignerService {

  readonly MAX_INGREDIENTS = 20;

  list: Ingredient[] = [];

  constructor() { }

  delete(index: number) {
    this.list.splice(index, 1);
  }

  drop(event: CdkDragDrop<Ingredient[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  get total(): number {
    return this.list.reduce((acc, item) => acc + item.price, 0);
  }

}
