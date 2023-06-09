import { Component, Input } from '@angular/core';
import { CurrentWeatherResponse } from 'src/app/features/current/weather-response';

@Component({
  selector: 'app-current',
  template: `
    <mat-card>
      <mat-card-content>
        <span>
          {{ current?.name }}, {{ current?.sys?.country }}
        </span>
        <span class="description">
          {{ description }}<img [src]="iconUrl" alt="weather icon">
        </span>
        <div class="big-info-container">
          <span class="big-info">
            {{ current?.main?.temp }} °C
          </span>
        </div>
        <ul>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="temperature feel like">device_thermostat</mat-icon>
              <span>Feels like</span>
            </div>
            <span>{{ current?.main?.feels_like }} °C</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="arrow_upward">arrow_upward</mat-icon>
              <span>Max</span>
            </div>
            <span>{{ current?.main?.temp_max }} °C</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="arrow_downward">arrow_downward</mat-icon>
              <span>Min</span>
            </div>
            <span>{{ current?.main?.temp_min }} °C</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="grain">grain</mat-icon>
              <span>Humidity</span>
            </div>
            <span>{{ current?.main?.humidity }} %</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="wind speed">air</mat-icon>
              <span>Wind speed</span>
            </div>
            <span>{{ current?.wind?.speed }} m/s</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="wind degrees">near_me</mat-icon>
              <span>Wind degrees</span>
            </div>
            <span>{{ current?.wind?.deg }}°</span>
          </li>
          <li>
            <div>
              <mat-icon aria-hidden="false" aria-label="line_weight">line_weight</mat-icon>
              <span>Pressure</span>
            </div>
            <span>{{ current?.main?.pressure }} hPa</span>
          </li>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {

  @Input() current!: CurrentWeatherResponse | undefined;
  @Input() description!: String | undefined;
  @Input() iconUrl!: String | undefined;

}
