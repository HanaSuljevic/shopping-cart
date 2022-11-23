import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-products-list',
  templateUrl: './edit-products-list.component.html',
  styleUrls: ['./edit-products-list.component.css']
})
export class EditProductsListComponent implements OnInit {

  addProductForm!: FormGroup; 

  constructor(
    private builder: FormBuilder,
    private productService: ProductService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.addProductForm = this.builder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required], 
      imageUrl: ['']
    })
  }

  addProduct() {
    const product = this.addProductForm.value
    console.log("product", product)

    this.productService.addNewProduct({...product, id: new Date().getUTCMilliseconds()}).subscribe(response => {
      this.router.navigate(['shop']);
    })
  }

}
