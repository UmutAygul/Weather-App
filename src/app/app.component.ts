import { Component, OnInit,ViewChild,ElementRef, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { WeatherData } from './models/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  selectedTeam = 'Ankara';
	onSelected(value:string): void {
		this.selectedTeam = value;

    this.ngOnInit()
	}


  constructor(private weatherService: WeatherService,private wf: AuthGuard){}


  cityName: string= this.selectedTeam;
  cityName2: string = "";
  weatherData?: WeatherData;

  ngOnInit() {
    
    if(this.wf.clap==1)
    {
      
        this.weatherService.getWeatherData(this.selectedTeam)
   
    .subscribe({
      
      next: (response) => {
        // console.log(this.wf.clap)
        this.weatherData= response;
      }
    });
    }

  
    
  }



}


