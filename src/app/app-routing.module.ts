import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'mainpage', component: MainpageComponent},

  {path:''    , component: LoginComponent},
  
  {path: '**',redirectTo: ''}
  
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const AppRoutingModule= RouterModule.forRoot(routes);

