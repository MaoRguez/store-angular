import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../../product.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /* products: Product[] = [
    {
      id: '1',
      image: 'assets/images/cetus-optimus.jpeg',
      title: 'Cicla Pista',
      price: 90000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/Emondatrek.jpeg',
      title: 'Trek Pista',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/gwocelot.jpeg',
      title: 'Montaña',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/images.jpeg',
      title: 'Pista',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/JAGUAR-1.jpeg',
      title: 'GW',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/Optimus-Sagitta.jpeg',
      title: 'Optimus',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/trek.jpeg',
      title: 'trek Montaña',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ]; */

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
    //return this.products;
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
    //return this.products.find(item => id === item.id);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/${id}`, changes)
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
