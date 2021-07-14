import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { environment } from './../../../../environments/environment';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', () => {
    describe('tests for getAllProducts', () => {
      // arrange preparar
      const expectData = [
        {
          id: '1',
          title: 'asas',
          price: 125,
          description: 'paso prueba',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'Hola',
          price: 1256,
          description: 'paso prueba',
          image: 'img/img.jpg'
        }
      ];
      let dataError, dataResponse;
      // actuación
      service.getAllProducts()
      .subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });
      const req = httpTestingController.expectOne(environment.url_api);
      req.flush(expectData)
      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
