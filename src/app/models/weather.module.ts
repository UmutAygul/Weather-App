import { AppComponent } from "../app.component"
import { WeatherService } from "../services/weather.service"

export interface WeatherData {
    result: [Result]
    
  }
  
  export interface Result {
    city :string
    date: string
    day: string
    icon: string
    description: string
    status: string
    degree: number
    min: string
    max: string
    night: string
    humidity: string
  }
  

  