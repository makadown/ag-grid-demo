import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  total_cart = 0;
  orders: any[] = [];

  constructor(private router: Router) {
    this.loadStorage();
    this.updateTotal();
  }

  isProductInCart(product: any) {
    // TODO: Switch to Id
    for (const item of this.items) {
      if (item.codigo === product.codigo) {
        return true;
      }
    }
    return false;
  }

  checkout() {
    // TODO
  }

  addToCart(product: any) {
    // TODO: Switch to Id
    for (const item of this.items) {
      if (item.codigo === product.codigo) {
        alert('Item already exists');
        return;
      }
    }

    this.items.push(product);
    this.saveStorage();
    this.updateTotal();
    alert('Product added to cart.');
    this.router.navigate(['/home/']);
  }

  removeItem(idx: number) {
    this.items.splice(idx, 1);
    this.saveStorage();
  }

  updateTotal() {
    this.total_cart = 0;
    for (const item of this.items) {
       // this.total_cart += Number(item.price);
       this.total_cart += Number(item.precio_compra);
    }
  }

  saveStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  loadStorage() {
    const localPromise = new Promise((resolve, reject) => {
      if (localStorage.getItem('items')) {
        this.items = JSON.parse(localStorage.getItem('items'));
      }
      resolve();
    });
    return localPromise;
  }
}
