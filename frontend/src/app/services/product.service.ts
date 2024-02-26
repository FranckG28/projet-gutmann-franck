import { Injectable } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly catalogService: CatalogService,
  ) { }

  getProduct(productId: string): Observable<Product> {
    return this.catalogService.getCatalog().pipe(
      map(products => {
        const product = products.find(product => product.id === +productId)
        return product as unknown as Product
      })
    )
  }

}
