
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router,private auth:AuthGuard) { }
  
  login(id, sif) {
    if (id === 'umut' && sif === 'umut') {
      sessionStorage.setItem('username', id)
      sessionStorage.setItem('ApiKey',environment.XRapidAPIKeyHeaderValue)
      return true;
    } else {
      return false;
    }
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate([""]);
    this.auth.clap=0
  }


}