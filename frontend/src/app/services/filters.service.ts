import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';

@Injectable()
export class FiltersService {

  private readonly filters = new FormControl<Ingredient[]>([]);

  constructor() { }

  get formControl() {
    return this.filters;
  }

  get filters$() {
    return this.filters.valueChanges.pipe(
      debounceTime(300),
      startWith([])
    )
  }

}
