import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => this.productsService.getProduct(params.id))
    )
  }

  /* fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
      console.log(product);
    });
  } */

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

  getRandomUsers() {
    this.productsService.getRandomUsers()
    .subscribe(
      // Manejo de errores
      users => { // good
        console.log(users);
      },
      error => {
        console.error(error);
      }
    );
  }

  getFile() {
    this.productsService.getFile()
    .subscribe(content => {
      console.log(content)
    });
  }

  /* Para descargar el archivo utilizando libreria FileSaver
  getFile() {
    this.productsService.getFile()
    .subscribe(content => {
      console.log(content);
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'hello world.txt');
    });
  } */
}
