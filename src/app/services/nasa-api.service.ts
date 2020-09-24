import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private _url: string = "https://apod.nasa.gov/apod/image/2009/PIA24023_fig1_1050.jpg";

  private _apod: string = "https://api.nasa.gov/planetary/apod?api_key=f326gDzgryjk7jyshYKNpiMqbN3KMMVw7nkB0mGy&date=2007-02-27";

  constructor(private http: HttpClient) { }

  getNasaApi(): Observable<any> {
    return this.http.get(this._apod);
  }

}
