import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as Sentry from "@sentry/angular";

import { Product } from './../../../product.model';
import { environment } from './../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

//A modo de ejemplo
interface User {
  email: string;
  gender: string;
  phone: string;
}

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

  // Ejemplo de tipado a una API RandomUser
  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  getFile() {
    return this.http.get('assets/files/text.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    Sentry.captureException(error);
    return throwError('ups algo salio mal');
  }
}
