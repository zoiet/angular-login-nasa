import { Component, OnInit } from '@angular/core';

import { NasaApiService } from './services/nasa-api.service';

import { Nasa } from './models/nasa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-api';

  nasaAPOD: Nasa[];

  constructor(
    private nasaApiService: NasaApiService) {

  }

  ngOnInit() {
    this.nasaApiService.getNasaApi().subscribe(
      data => {
        console.log(data);
        this.nasaAPOD = data;
      }
    );

  }

}
