import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountyListService } from './../../services/county-list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryData: any = [];
  searchText: any = '';
  constructor(private countryService: CountyListService, private _router: Router) { }

  ngOnInit(): void {
    this.getCountriesData();
  }

  getCountriesData() {
    this.countryService.getCountriesdata().subscribe((result: any) => {
      let cdata = result.data;
      for (const key in cdata) {
        this.countryData.push(cdata[key]);
      }
    })
  }
  filterData() {
    this.countryData = this.countryData.filter((item: any) => item.country.includes(this.searchText));
  }
  navigateTo(countryDetails: any) {
    console.log(countryDetails);
    let data = {
      state: {
        item: countryDetails
      }
    }
    this._router.navigate(['/country-details'], data);
  }



}
