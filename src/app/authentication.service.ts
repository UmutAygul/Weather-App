
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  
  login(id, sif) {
    if (id === 'umut' && sif === 'umut') {
      sessionStorage.setItem('username', id)
      sessionStorage.setItem('ApiKey',environment.XRapidAPIKeyHeaderValue)
      return true;
    } else {
      return false;
    }
  }


}