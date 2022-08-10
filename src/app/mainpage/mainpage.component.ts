import { Component, OnInit,ViewChild,ElementRef, NgModule } from '@angular/core';
import { WeatherData } from '../models/weather.module';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';



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
  // cityName2: string = "";
  weatherData?: WeatherData;

  ngOnInit() {
    if(sessionStorage.length == 0){
      this.router.navigate(['/'])
    }
  
    
    this.weatherService.getWeatherData(this.selectedTeam)
    .subscribe({
      
      next: (response) => {

        this.weatherData= response;
        console.log(response);
      }
    });
  
    
  }
}
