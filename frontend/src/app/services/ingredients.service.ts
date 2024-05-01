import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../config/environment';
import { IngredientsCategory } from '../models/ingredients-category';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  all(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(API_ENDPOINT + '/ingredients');
  }

  categories(): Observable<IngredientsCategory[]> {
    return this.httpClient.get<IngredientsCategory[]>(API_ENDPOINT + '/categories');
  }

}

