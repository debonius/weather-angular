import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeatherResponse } from 'src/app/features/current/weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherHandlerService {

  WEATHER_API = '61a20f5d41830810abfcc3d15f5f1b2a';

  constructor(private _httpClient: HttpClient) { }

  getWeatherByCoords(lat: Number, lon: Number) {
    return this._httpClient.get<CurrentWeatherResponse>
    (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.WEATHER_API}&units=metric`);
  }

  getWeatherByQuery(query: String) {
    return this._httpClient.get<CurrentWeatherResponse>
    (`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${this.WEATHER_API}&units=metric`);
  }

}
