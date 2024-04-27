import { Routes } from '@angular/router';
import { HomeComponent } from '../screens/home/home.component';
import { AllProductsComponent } from '../screens/all-products/all-products.component';
import { TShirtsComponent } from '../screens/t-shirts/t-shirts.component';
import { ContactComponent } from '../screens/contact/contact.component';
import { MugsComponent } from '../screens/mugs/mugs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'tshirts', component: TShirtsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mugs', component: MugsComponent },
];
