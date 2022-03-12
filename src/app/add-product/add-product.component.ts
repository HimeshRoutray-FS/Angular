import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { GetDealerDetailsService } from '../get-dealer-details.service';
import { CreateProductService } from '../create-product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  slno: string ='NULL';
  productname: string = '';
  dates: string = '';
  quantity: string = '';
  productslnofromto: string = '';
  companyname: string = '';

  success: string = '';
  error: string = '';

  product: Product;
  loading: boolean = false;

  constructor(private getDealerDetailsService: GetDealerDetailsService, private createProduct: CreateProductService) { }

  ngOnInit() {
  }

  createDealerObj(){
    this.success = '';
    this.error = '';
    if(!this.productname || !this.dates || this.quantity == '' || this.productslnofromto == ''){
      this.error = 'All fields are mandatory.';
      window.alert('All fields are mandatory.');
    }
    else{
      this.loading = true;
      this.dates = moment(this.dates).format('DD-MM-YYYY');
      this.companyname = this.getDealerDetailsService.dealer.companyname;
      this.product = new Product(this.slno, this.dates, this.productname, this.quantity, this.productslnofromto, this.companyname);
      this.createProduct.storeProduct(this.product)
      .subscribe(
        (res: Product) => {
          // Update the product
          this.product = res;

          // Inform the user
          this.loading = false;
          this.success = 'Product added successfully.';
          window.alert('Product added successfully.');

          // Reset the form
          this.productname = '';
          this.quantity = '';
          this.productslnofromto = '';
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );
    }
  }

}
