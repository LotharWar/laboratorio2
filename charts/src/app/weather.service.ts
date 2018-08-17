import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  dailyForecast(){
    return this._http.get("http://cosevi.cloudapi.junar.com/api/v2/datastreams/CLASE-Y-TIPOS-DE-ACCID/data.json/?auth_key=b0191f25ec21bf892241ee767b321998c22df14d&limit=10000")
    .map(result => result);
  }
}
