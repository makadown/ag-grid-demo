import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  // faShoppingBag = faShoppingBag;

  constructor( private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

  logout() {

  }

  login() {
    this.router.navigate(['/login']);
  }
}
