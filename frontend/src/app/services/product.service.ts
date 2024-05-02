import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { API_ENDPOINT } from '../config/environment';
import { HttpClient } from '@angular/common/http';
import { ProductView } from '../models/catalog-options';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly http: HttpClient
  ) { }

  view(view: ProductView) {
    return this.http.get<Product[]>(API_ENDPOINT + `/products?view=${view}`);
  }

  search(search: string) {
    return this.http.get<Product[]>(API_ENDPOINT + `/products?search=${search}`);
  }

  get(id: number) {
    return this.http.get<Product>(API_ENDPOINT + `/products/${id}`);
  }

  addProduct(product: {
    name: string,
    description?: string,
    ingredients: number[]
  }): Observable<Product> {
    return this.http.post<Product>(API_ENDPOINT + '/products', product);
  }

}
