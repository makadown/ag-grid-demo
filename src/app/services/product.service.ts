import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getUrl = 'https://raw.githubusercontent.com/makadown/ag-grid-demo/master/dummydata/products.json';
  // const postUrl = '';
  // const putUrl = '';
  // const deleteUrl = '';
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any[]> {
    return this.http.get(this.getUrl).pipe(
          map((resp: any) => {
            // console.log(resp);
            return resp.products;
          })
      );
  }
}
