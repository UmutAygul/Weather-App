import { Component, OnInit,ViewChild,ElementRef, NgModule } from '@angular/core';
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


  constructor(private weatherService: WeatherService){}
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


