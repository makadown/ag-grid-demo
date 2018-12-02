import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  // faShoppingBag = faShoppingBag;

  constructor( private http: HttpClient, private router: Router,
              public _cartService: CartService) {

  }

  ngOnInit() {
  }

  logout() {

  }

  login() {
    this.router.navigate(['/login']);
  }
}
