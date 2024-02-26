import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '../config/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getCatalog() {
    return this.http.get<Product[]>(API_ENDPOINT);
  }

}
