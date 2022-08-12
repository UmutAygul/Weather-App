import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(

    private router: Router,
    private authenticationService: AuthenticationService,
) {}

    ngOnInit() {
  }

    onSubmit(event) {
      
      this.router.navigate(['/mainpage'])
        const target = event.target
        if(this.authenticationService.login(target.querySelector('#username').value, target.querySelector('#password').value))
        {            
          console.log('Istek basariyla gerceklestirildi')

          this.router.navigate(['/mainpage'])
        }else{

        }
      }
}
