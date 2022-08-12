import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'mainpage', component: MainpageComponent,canActivate:[AuthGuard]},

  {path:''   , component: LoginComponent},
  
  {path: '**',redirectTo: ''}
  
];


export const AppRoutingModule= RouterModule.forRoot(routes);

