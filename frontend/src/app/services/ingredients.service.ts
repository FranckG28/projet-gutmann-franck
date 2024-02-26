import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientsCategory } from '../models/ingredients-category';
import { API_ENDPOINT } from '../config/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getIngredientCategories(): Observable<IngredientsCategory[]> {
    return this.httpClient.get<IngredientsCategory[]>(API_ENDPOINT + '/ingredients.json');
  }

}
