import { Component, OnInit } from '@angular/core';
import { CurrWeatherHomeService } from '../../store/curr-weather-home/state/curr-weather-home.service';
import { AccuWeatherService } from 'src/app/services/accu-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
