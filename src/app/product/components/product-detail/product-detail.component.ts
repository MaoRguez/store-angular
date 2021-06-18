import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '10',
      title: 'Bike Trek',
      image: 'assets/images/trek.jpeg',
      price: 3000,
      description: 'Nuevo Producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Bike GW',
      image: 'assets/images/trek.jpeg',
      description: 'Nuevo Producto de GW'
    };
    this.productsService.updateProduct('123', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('12')
    .subscribe(rta => {
      console.log(rta)
    });
  }
}
