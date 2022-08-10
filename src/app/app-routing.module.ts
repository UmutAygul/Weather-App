import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'mainpage', component: MainpageComponent},

  {path:''    , component: LoginComponent},
  
  {path: '**',redirectTo: ''}
  
];


export const AppRoutingModule= RouterModule.forRoot(routes);

