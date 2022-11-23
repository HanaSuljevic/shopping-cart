import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Product } from '../models/product';

import { wishlistUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(): Observable<number[]> {
    return this.http.get<Product[]>(wishlistUrl).pipe(
      map((result: Product[]) => {
        let productIds: number[] = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )

  }

  addToWishlist(productId: number) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId: number){
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
