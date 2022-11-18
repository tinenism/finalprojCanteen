import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

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
  path: 'about', component: AboutComponent
},
{
  path: 'menu', component: MenuComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
