import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardService implements CanActivate{

  isUserLoggedIn : boolean = false;

  constructor(private router: Router) { }

  canActivate() {
    if (this.isUserLoggedIn) { 
      return true;
    } else {
      window.alert("Please log in as admin to view this page.");
      this.router.navigate(['login']);
      return false;
    }
  }
}
