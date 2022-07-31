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
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  invalidLogin = false

  constructor(

    private router: Router,
    private authenticationService: AuthenticationService,
) {}

    ngOnInit() {
  }

    onSubmit(event) {

        const target = event.target
        if(this.authenticationService.login(target.querySelector('#username').value, target.querySelector('#password').value))
        {            
          console.log('Istek basariyla gerceklestirildi')
          this.router.navigate(['/home'])
          this.invalidLogin = false
          this.router.navigate(['/mainpage'])
        }else{
          this.invalidLogin = true
        }

      }

}