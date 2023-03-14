import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SubdivisionComponent } from './components/subdivision/subdivision.component';
const routes: Routes = [
  {path:'countries',component:CountryListComponent},
  {path:'country-details',component:CountryDetailsComponent},
  {path:'sub-division',component:SubdivisionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
