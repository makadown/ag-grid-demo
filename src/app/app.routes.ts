import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessComponent } from './pages/success/success.component';
import { AdminordersComponent } from './pages/admin/adminorders/adminorders.component';
import { AdminproductsComponent } from './pages/admin/adminproducts/adminproducts.component';
import { ProductComponent } from './pages/products/product.component';
import { DatesComponent } from './pages/dates/dates.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dates', component: DatesComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin/products', component: AdminproductsComponent },
    { path: 'admin/orders', component: AdminordersComponent },
    { path: '**', component: HomeComponent /*PageNotFoundComponent*/ },
];

export const APP_RUTAS = RouterModule.forRoot(APP_ROUTES);
