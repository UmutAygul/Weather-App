import { Component, OnInit,ViewChild,ElementRef, NgModule } from '@angular/core';
import { WeatherData } from '../models/weather.module';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { environment } from 'src/environments/environment';



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
  constructor(public a:AuthenticationService,private weatherService: WeatherService, private router: Router){
    
  }

  cityName: string= this.selectedTeam;
  weatherData?: WeatherData;

  ngOnInit() {


    if(sessionStorage["ApiKey"]==environment.XRapidAPIKeyHeaderValue)
    {
          this.weatherService.getWeatherData(this.selectedTeam)
    .subscribe({
      next: (response) => {

        this.weatherData= response;
        // console.log(sessionStorage["ApiKey"])
        // console.log(environment.XRapidAPIKeyHeaderValue)
        console.log("Key is true")
        
      }
    });
    }

  
    
  }
}
