import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{ 
  path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) 
},
{
path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
  
{ path: 'reset/login/reset', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }