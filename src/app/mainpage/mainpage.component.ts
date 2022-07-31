import { Component, OnInit,ViewChild,ElementRef, NgModule } from '@angular/core';
import { WeatherData } from '../models/weather.module';
import { WeatherService } from '../services/weather.service';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  selectedTeam = 'Ankara';
	onSelected(value:string): void {
		this.selectedTeam = value;

    this.ngOnInit()
	}
  constructor(private weatherService: WeatherService, private router: Router){
    
  }
  cityName: string= this.selectedTeam;
  cityName2: string = "";
  weatherData?: WeatherData;

  ngOnInit() {
    

    this.weatherService.getWeatherData(this.selectedTeam)
   
    .subscribe({
      
      next: (response) => {

        this.weatherData= response;
        console.log(response);
      }
    });
  
    
  }
}
