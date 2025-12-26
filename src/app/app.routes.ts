import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowmoreComponent } from './showmore/showmore.component';
import { PricesComponent } from './prices/prices.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'home', component: HomeComponent},
    {path: 'show-more', component: ShowmoreComponent},
    {path: 'prices', component: PricesComponent},    
];
