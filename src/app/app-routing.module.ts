import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import { SnacksComponent } from './menu/snacks/snacks.component';

import {canActivate , redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { ProfileComponent } from './profile/profile.component';
import { ReservationComponent } from './reservation/reservation.component';

const redirectLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectHome = () => redirectLoggedInTo ([''])
const routes: Routes = [
{
  path: '', component: DashboardComponent,
  ...canActivate(redirectLogin)

},
{ 
  path: 'auth/signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule),
  ...canActivate(redirectHome)
},
{
path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  ...canActivate(redirectHome)
},
{ 
  path: 'auth/login/reset', loadChildren: () => import('./auth/reset/reset.module').then(m => m.ResetModule) 
},

{
  path: 'about', component: AboutComponent,
  ...canActivate(redirectLogin)
},
{
  path: 'menu', component: MenuComponent,
  ...canActivate(redirectLogin)
},
{
  path: 'checkout-list', component: CheckoutListComponent
},
{path: '', redirectTo: 'menu', pathMatch: 'full', }, 
    {
      path: 'menu', component: MenuComponent, children: [
      {path: 'breakfast', component: BreakfastComponent},
      {path: 'lunch', component: LunchComponent},
      {path: 'snacks', component: SnacksComponent},
      
  ]},
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'reservation', component: ReservationComponent,
    ...canActivate(redirectLogin)
  }
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
