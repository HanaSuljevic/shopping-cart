import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productsUrl } from '../config/api';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //TODO: Populate products from an API and return an Observable
    return this.http.get<Product[]>(productsUrl);
  }

  addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(productsUrl, product);
  }
}
