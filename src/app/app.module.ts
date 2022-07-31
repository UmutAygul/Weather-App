import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectSearchModule } from 'mat-select-search';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectSearchModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FlexLayoutModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
