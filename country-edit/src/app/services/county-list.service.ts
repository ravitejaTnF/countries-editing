import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import countries from '../counties.json';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountyListService {

  constructor(private http:HttpClient) { }

  getCountriesdata(){
    return of(countries);
  }
}
