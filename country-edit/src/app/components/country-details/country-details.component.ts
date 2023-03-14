import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountyListService } from './../../services/county-list.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryDetails: any = [];
  searchText = '';
  filteredDataAvailable!: any;
  filteredItems = [];

  constructor(private _router: Router, private cservice: CountyListService) {
    // fetching the data sent by country-list component using navigation extras.
    this.countryDetails = this._router.getCurrentNavigation()?.extras;
  }

  ngOnInit(): void {
    this.getData();
    // Initially assigning the data returned from API to filteredData to display all data
    // when no search is made, once search is made, search related results will appear.
    this.filteredItems = this.countryDetails;
  }

  getData() {
    this.cservice.getStatesBasedOnCountry().subscribe((res: any) => {
      this.countryDetails = res;
    });
  }

  filterData() {
    // Filtering the data based on the search term.
    this.filteredItems = this.countryDetails.filter((item:any) => item.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  // navigating to sub division component with edit
  // this will takes you to edit sub-division component.
  editSubdivision(data:any){
    let details = {
      state : {
        details : data,
        type:'edit'
      }
    };
    this._router.navigate(['/sub-division'],details);
  }

  // navigating to sub division component with add
  // this will taake you to add-subdivision component
  addSubdivision(){
    let data = {
      state:{
        details:null,
        type:'add'
      }
    }
    this._router.navigate(['/sub-division'],data);
  }
  activeOrInactive(){
    if(window.confirm('Are you sure you want to in-active this subdivision ?')){
      window.alert('sub-division inactivated successfully!!');
    }
  }

}
