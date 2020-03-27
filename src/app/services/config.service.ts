import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import configData from '../dummy-data/getConfig.json';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  

  constructor(private httpclient: HttpClient) { }

  public getConfig(): Observable<any> {
    return of(configData);
  }

}
