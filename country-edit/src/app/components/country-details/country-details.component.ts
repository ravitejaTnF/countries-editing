import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryDetails: any;
  constructor(private _router: Router) {
    this.countryDetails = this._router.getCurrentNavigation()?.extras;
    console.log(this.countryDetails);
  }

  ngOnInit(): void {

  }

}
