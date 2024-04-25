import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IngredientsCategory } from '../models/ingredients-category';
import { API_ENDPOINT } from '../config/environment';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getIngredientCategories(): Observable<IngredientsCategory[]> {
    return this.httpClient.get<IngredientsCategory[]>(API_ENDPOINT + '/ingredients');
  }

  getAllIngredients(): Observable<{ [id: string]: Ingredient }> {
    return this.getIngredientCategories().pipe(
      map((categories) =>
        categories.reduce((acc, category) => {
          category.ingredients.forEach((ingredient) => {
            acc[ingredient.id] = ingredient;
          });
          return acc;
        }, {} as { [id: string]: Ingredient }
        )
      )
    );
  }
}

