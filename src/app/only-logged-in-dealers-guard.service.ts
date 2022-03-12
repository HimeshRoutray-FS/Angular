import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInDealersGuardService implements CanActivate{

  isDealerLoggedIn : boolean = false;

  constructor(private router: Router) { }

  canActivate() {
    if (this.isDealerLoggedIn) { 
      return true;
    } else {
      window.alert("Please log in as dealer to view this page.");
      this.router.navigate(['login']);
      return false;
    }
  }}
