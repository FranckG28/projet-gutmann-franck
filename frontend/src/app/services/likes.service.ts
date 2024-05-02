import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  all() {
    return this.http.get<Product[]>('/api/likes');
  }

  save(productId: number) {
    return this.http.post<boolean>('/api/likes', { product_id: productId });
  }

  delete(productId: number) {
    return this.http.delete<boolean>('/api/likes', { params: { product_id: productId } });
  }

}
