import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any[] = [];
  private getUrl = 'https://raw.githubusercontent.com/makadown/ag-grid-demo/master/dummydata/products.json';
  private getUrlById = 'https://tienda-demo-backend.herokuapp.com/productos/codigo/';
  // const postUrl = '';
  // const putUrl = '';
  // const deleteUrl = '';
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any[]> {

    if ( this.products.length > 0  ) {
        return new Observable<any[]>().pipe(
          map( () => this.products ));
    }

    return this.http.get(this.getUrl).pipe(
          map((resp: any) => {
            // console.log(resp);
            this.products = resp.products;
            return resp.products;
          })
      );
  }

  public getProduct(id: any): Observable<any> {
        return this.http.get(this.getUrlById + id).pipe(
          map((resp: any) => {
            // console.log(resp);
            return resp.producto[0];
          })
      );
  }
}
