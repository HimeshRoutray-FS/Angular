import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/Transaction';
import { GetDealerDetailsService } from '../get-dealer-details.service';
import { CreateTransactionService } from '../create-transaction.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transactionid: string ='NULL';
  dates: string = '';
  credit: string = '';
  debit: string = '';
  outstanding: string = '0';
  description: string = '';
  companyname: string = '';

  success: string = '';
  error: string = '';

  transaction: Transaction;
  loading: boolean = false;

  constructor(private getDealerDetailsService: GetDealerDetailsService, private createTransaction: CreateTransactionService) { }

  ngOnInit() {
  }

  createDealerObj(){
    this.success = '';
    this.error = '';
    if(!this.dates || this.credit == '' || this.debit == '' || this.description == ''){
      this.error = 'All fields are mandatory.';
      window.alert('All fields are mandatory.');
    }
    else{
      this.loading = true;
      this.dates = moment(this.dates).format('DD-MM-YYYY');
      this.companyname = this.getDealerDetailsService.dealer.companyname;
      this.transaction = new Transaction(this.transactionid, this.dates, this.credit, this.debit, this.outstanding, this.description, this.companyname);
      this.createTransaction.storeTransaction(this.transaction)
      .subscribe(
        (res: Transaction) => {
          // Update the product
          this.transaction = res;

          // Inform the user
          this.loading = false;
          this.success = 'Transaction saved successfully.';
          window.alert('Transaction saved successfully.');

          // Reset the form
          this.credit = '';
          this.debit = '';
          this.description = '';
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );
    }
  }

}
