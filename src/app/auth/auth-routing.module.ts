import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{ 
  path: 'signup', loadChildren: () => import('../auth/signup/signup.module').then(m => m.SignupModule) 
},
{
path: 'login', loadChildren: () => import('../auth/login/login.module').then(m => m.LoginModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }