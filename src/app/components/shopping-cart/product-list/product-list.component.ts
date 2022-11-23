import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor(
    private productService: ProductService,
    private wislistService: WishlistService 
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products)=> {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wislistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }
}
