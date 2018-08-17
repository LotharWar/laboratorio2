import { Component } from '@angular/core';
import { WeatherService } from './weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  constructor(private _weather: WeatherService){}

  /**
   * 
   *   ngOnInit(){
    this._weather.dailyForecast()
    .subscribe(res =>{console.log})
  }
   */


}
