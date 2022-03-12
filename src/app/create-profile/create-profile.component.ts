import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { CreateDealerProfileService } from '../create-dealer-profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  username: string = '';
  password: string = '';
  role: string = 'Dealer';
  companyname: string = '';

  success: string = '';
  error: string = '';

  user: User;
  loading: boolean = false;

  constructor(private createDealerProfileService: CreateDealerProfileService) { }

  ngOnInit() {
  }

  createProfileObj(){
    this.success = '';
    this.error = '';
    if(this.username == '' || this.password == '' || this.companyname == ''){
      this.error = 'All fields are mandatory.';
      window.alert("All fields are mandatory.");
    }
    else{
      this.loading = true;
      this.user = new User(this.username, this.password, this.role, this.companyname);
      this.createDealerProfileService.storeDealerProfile(this.user)
      .subscribe(
        (res: User) => {
          // Update the dealer
          this.user = res;

          // Inform the user
          this.loading = false;
          this.success = 'Dealer created successfully.';
          window.alert("Dealer created successfully.");

          // Reset the form
          this.username ='';
          this.password = '';
          this.companyname = '';
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );
    }
    
  }

}
