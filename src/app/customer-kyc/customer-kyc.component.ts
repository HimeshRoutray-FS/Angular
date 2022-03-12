import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerKycService } from '../customer-kyc.service';
import * as moment from 'moment';
import { RcUploadService } from '../rc-upload.service';

@Component({
  selector: 'app-customer-kyc',
  templateUrl: './customer-kyc.component.html',
  styleUrls: ['./customer-kyc.component.css']
})
export class CustomerKycComponent implements OnInit {

  customerId: string = 'NULL';
  customerName: string = '';
  dates: string = '';
  productName: string='';
  activationDate: string = '';
  vehicle: string = '';
  mobile: string = '';
  imei: string = '';
  idType: string = '';
  idNumber: string = '';
  rcUrl: string = '';
  selectedFile: File;
  
  @ViewChild('rcPhoto') rcPhoto: ElementRef;

  success: string = '';
  error: string = '';

  customer: Customer;
  loading: boolean = false;

  constructor(private customerKycService: CustomerKycService, private rcUploadService: RcUploadService) { }

  ngOnInit() {
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
   }
  }

  createCustomerObj(){
    this.success = '';
    this.error = '';

    if(this.customerName == '' || !this.dates || !this.productName || !this.activationDate || this.vehicle == '' || this.mobile == '' || this.imei == '' || !this.idType || this.idNumber == '' || !this.selectedFile){
      this.error = 'All fields are mandatory.';
      window.alert("All fields are mandatory.");
    }
    else{
      this.loading = true;
      const formData = new FormData();
      formData.append('avatar', this.selectedFile, this.selectedFile.name);

      this.rcUploadService.uploadFile(formData).subscribe(
        (res: string) => {
          this.rcUrl = res;

          this.dates = moment(this.dates).format('DD-MM-YYYY');
          this.activationDate = moment(this.activationDate).format('DD-MM-YYYY');
          this.customer = new Customer(this.customerId, this.dates, this.customerName, this.productName, this.activationDate, this.vehicle, this.mobile, this.imei, this.idType, this.idNumber, this.rcUrl);
          this.customerKycService.storeCustomer(this.customer)
          .subscribe(
            (res: Customer) => {
              // Update the dealer
              this.customer = res;

              // Inform the user
              this.loading = false;
              this.success = 'Customer created successfully.';
              window.alert("Customer created successfully.");

              // Reset the form
              this.customerName = '';
              this.productName = '';
              this.vehicle = '';
              this.mobile = '';
              this.imei = '';
              this.idType = '';
              this.idNumber = '';
              this.rcUrl = '';
              this.rcPhoto.nativeElement.value = null;
            },
            (err) => {
              this.loading = false;
              this.error = err
            }
          );
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );

      
    }
    
  }

}
