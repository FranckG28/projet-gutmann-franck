import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { API_ENDPOINT } from '../config/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(API_ENDPOINT + '/products');
  }

  getProduct(productId: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => {
        const product = products.find(product => product.id === +productId)
        return product as unknown as Product
      })
    )
  }

}
