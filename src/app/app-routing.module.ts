import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CreateDealerComponent } from './create-dealer/create-dealer.component';
import { GetAllDealersComponent } from './get-all-dealers/get-all-dealers.component';
import { GetDealerDetailsComponent } from './get-dealer-details/get-dealer-details.component';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';
import { GetReportComponent } from './get-report/get-report.component';
import { CustomerKycComponent } from './customer-kyc/customer-kyc.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetSingleDealerDetailsComponent } from './get-single-dealer-details/get-single-dealer-details.component';
import { OnlyLoggedInDealersGuardService } from './only-logged-in-dealers-guard.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  { path : '' , redirectTo: '/login', pathMatch: 'full'},
  { path:'login' , component: LoginComponent },
  { path: 'createdealer', component : CreateDealerComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  { path: 'getalldealers', component : GetAllDealersComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'getdealerdetails', component:GetDealerDetailsComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'report', component:GetReportComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'customerkyc', component:CustomerKycComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'getallcustomers', component:GetAllCustomersComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'users', component: ProfilesComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'createuser', component: CreateProfileComponent, canActivate: [OnlyLoggedInUsersGuardService]},
  {path: 'getsingledealerdetails', component:GetSingleDealerDetailsComponent, canActivate: [OnlyLoggedInDealersGuardService]},
  { path:'**' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
