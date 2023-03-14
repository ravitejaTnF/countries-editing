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
  filteredItems:any =[];
  filteredDataAvailable!:boolean;
  constructor(private countryService: CountyListService, private _router: Router) { }

  ngOnInit(): void {
    this.getCountriesData();
    // Initially assigning the data returned from API to filteredData to display all data
    // when no search is made, once search is made, search related results will appear.
    this.filteredItems = this.countryData;
  }


  getCountriesData() {
    this.countryService.getCountriesdata().subscribe((result: any) => {
      this.countryData = result;
    })
  }

  filterData() {
    // Filtering the data based on the search term.
    this.filteredItems = this.countryData.filter((item: any) => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    // This is a flag to display a message when search results are zero
    this.filteredDataAvailable = this.filteredItems.length == 0 ? true : false; 
  }

  navigateTo(countryDetails: any) {
    // Navigating to country-details component and passing the country details
    // based on this country-details we pass from here the CountryDetailsComponent will
    // fetch the corresponding country details in that component.
    this._router.navigate(['/country-details'], countryDetails);
  }



}
