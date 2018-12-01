import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

   id = 0;
   product: any = { 'producto': '' };

  constructor(public activatedRoute: ActivatedRoute,
              private _productService: ProductService) {

    activatedRoute.params.subscribe(params => {
      const id = params['id'];
      // console.log(this.id);

      if ( id !== 'nuevo' ) {
         this.cargarProducto(id);
      }
  });
   }

  ngOnInit() {
  }

  cargarProducto(id: any) {
    this._productService.getProduct(id).subscribe( (product: any) => {
        // console.log('Loading product');
        // console.log(product);
          this.product = product;
    } );
  }

}
