import { Component, OnInit,ViewChild,ElementRef, NgModule } from '@angular/core';
import { WeatherData } from './models/weather.module';
import { WeatherService } from './services/weather.service';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}


  constructor(private weatherService: WeatherService){}
  cityName: string= this.selectedTeam;
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



//  getWeatherData(cityName: string){

//   this.weatherService.getWeatherData(this.selectedTeam)
   
//   .subscribe({
//     next: (response) => {
//       this.weatherData= response;
//       console.log(response);
//     }
//   });

// }

}


