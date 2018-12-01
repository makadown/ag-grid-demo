import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AdminordersComponent } from './pages/admin/adminorders/adminorders.component';
import { AdminproductsComponent } from './pages/admin/adminproducts/adminproducts.component';

import { APP_RUTAS } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AdminordersComponent,
    AdminproductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
