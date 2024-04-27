import { Routes } from '@angular/router';
import { HomeComponent } from '../screens/home/home.component';
import { AllProductsComponent } from '../screens/all-products/all-products.component';
import { TShirtsComponent } from '../screens/t-shirts/t-shirts.component';
import { ContactComponent } from '../screens/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 'contact', component: ContactComponent },
];
