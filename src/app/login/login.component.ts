import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { OnlyLoggedInUsersGuardService } from '../only-logged-in-users-guard.service';
import { User } from '../model/User';
import { GetUserDetailsService } from '../get-user-details.service';
import { OnlyLoggedInDealersGuardService } from '../only-logged-in-dealers-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  user: User;
  error: string = '';
  loading: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private onlyLoggedInUsersGuardService: OnlyLoggedInUsersGuardService, private getUserDetailsService: GetUserDetailsService, private onlyLoggedInDealersGuardService: OnlyLoggedInDealersGuardService) {
  }
        
  ngOnInit() {
  }
        
  dologin(): void {
    if(this.username == '' || this.password ==''){
      this.error = 'Username and Password are mandatory.';
    }
    else{
      this.loading = true;
      this.loginService.getLoginResponse(this.username, this.password).subscribe(
        (res: User) => {
          this.user = res;
          this.loading = false;
          this.error = '';
          if(this.user){
            if(this.user.role == 'Admin'){
              this.onlyLoggedInUsersGuardService.isUserLoggedIn = true;
              this.router.navigate(['getalldealers']);
            }
            else if(this.user.role == 'Dealer'){
              this.getUserDetailsService.user = this.user;
              this.onlyLoggedInDealersGuardService.isDealerLoggedIn = true;
              this.router.navigate(['getsingledealerdetails']);
            }
            else{
              this.error = 'Username or Password is incorrect.';
              this.username = '';
              this.password = '';
            }
          }
          else{
            this.error = 'Username or Password is incorrect.';
            this.username = '';
            this.password = '';
          }
        },
        (err) => {
          this.loading = false;
          this.error = err;
        }
      );
    } 
  }
}
