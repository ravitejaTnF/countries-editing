import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import countries from '../counties.json';
import { of } from 'rxjs';
import * as states from '../states';
@Injectable({
  providedIn: 'root'
})
export class CountyListService {

  constructor(private http:HttpClient) { }

  getCountriesdata(){
    return of(countries);
  }

  getStatesBasedOnCountry(){
    return of(states.states);
  }
}
