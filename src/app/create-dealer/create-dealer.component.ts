import { Component, OnInit } from '@angular/core';
import { Dealer } from '../model/Dealer';
import { CreateDealerService } from '../create-dealer.service';

@Component({
  selector: 'app-create-dealer',
  templateUrl: './create-dealer.component.html',
  styleUrls: ['./create-dealer.component.css']
})
export class CreateDealerComponent implements OnInit {
  slno: string = 'NULL';
  companyname: string = '';
  dealername: string = '';
  district: string='';
  address: string = '';
  email: string = '';
  mobile: string = '';
  pan: string = '';
  gst: string = '';

  success: string = '';
  error: string = '';

  dealer: Dealer;
  loading: boolean = false;

  constructor(private createDealerService: CreateDealerService) { }

  ngOnInit() {
  }

  createDealerObj(){
    this.success = '';
    this.error = '';
    if(this.companyname == '' || this.dealername == '' || this.district == '' || this.address == '' || this.email == '' || this.mobile == '' || this.pan == '' || this.gst == ''){
      this.error = 'All fields are mandatory.';
      window.alert("All fields are mandatory.");
    }
    else{
      this.loading = true;
      this.dealer = new Dealer(this.slno, this.companyname, this.dealername, this.district, this.address, this.email, this.mobile, this.pan, this.gst);
      this.createDealerService.storeDealer(this.dealer)
      .subscribe(
        (res: Dealer) => {
          // Update the dealer
          this.dealer = res;

          // Inform the user
          this.loading = false;
          this.success = 'Dealer created successfully.';
          window.alert("Dealer created successfully.");

          // Reset the form
          this.companyname = '';
          this.dealername = '';
          this.district = '';
          this.address = '';
          this.email = '';
          this.mobile = '';
          this.pan = '';
          this.gst = '';
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );
    }
    
  }
}
