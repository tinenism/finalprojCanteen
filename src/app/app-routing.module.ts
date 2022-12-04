import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import { SnacksComponent } from './menu/snacks/snacks.component';
const routes: Routes = [
{
  path: '', component: DashboardComponent
},
{ 
  path: 'auth/signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) 
},
{
path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
},
{ 
  path: 'auth/login/reset', loadChildren: () => import('./auth/reset/reset.module').then(m => m.ResetModule) 
},

{
  path: 'about', component: AboutComponent
},
{
  path: 'menu', component: MenuComponent
},
{
  path: 'checkout-list', component: CheckoutListComponent
},
{path: '', redirectTo: 'menu', pathMatch: 'full'},
    {
      path: 'menu', component: MenuComponent, children: [
      {path: 'breakfast', component: BreakfastComponent},
      {path: 'lunch', component: LunchComponent},
      {path: 'snacks', component: SnacksComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MenuComponent,
  BreakfastComponent,
  LunchComponent,
  SnacksComponent
]
