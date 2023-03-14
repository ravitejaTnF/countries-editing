import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.css']
})
export class SubdivisionComponent implements OnInit {

  addDivisionForm!:FormGroup;
  activeSelection:string = 'In-active';
  dataFromRoute:any;
  constructor(private router:Router) {
    // receiving data to decide whether to go for add-subdivision or edit-subdivision
    this.dataFromRoute = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.addDivisionForm = new FormGroup({
      countryCode : new FormControl('',[Validators.required]),
      subdivisionCode: new FormControl('',[Validators.required]),
      subdivisionName: new FormControl('',[Validators.required])
    });
    this.setValuesBasedOnRoute();
  }

  formSubmission(){
    console.log(this.addDivisionForm.value);
  }

  setValuesBasedOnRoute(){
    // if it is add then setting the form values got from the component
    if(this.dataFromRoute.type == 'add'){
      this.addDivisionForm.controls['countryCode'].setValue('');
      this.addDivisionForm.controls['subdivisionCode'].setValue('');
      this.addDivisionForm.controls['subdivisionName'].setValue('');
    }
    // if it is edit then setting the form values as empty.
    else if(this.dataFromRoute.type == 'edit'){
      this.addDivisionForm.controls['countryCode'].setValue(this.dataFromRoute.details);
    }
  }

}
