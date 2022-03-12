import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../model/Transaction';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GetTransactionsService } from '../get-transactions.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  error: string = '';
  transactions: Transaction[];
  loading: boolean = true;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['dates', 'credit', 'debit', 'outstanding', 'description'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getTransactionsService: GetTransactionsService) { }

  ngOnInit() {
    this.getTransactionsService.getTransactions().subscribe(
      (res: Transaction[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No transaction to display.';
        }
        else{
          this.error = '';
          this.transactions = res;
          this.dataSource.data = this.transactions;
          this.dataSource.connect().subscribe(d => this.renderedData = d);
        }
      },
      (err) => {
        this.loading = false;
          this.error = err;
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  print() {
    this.rows = [];
    for (let obj of this.renderedData) {
      var temp = [];
      for (let key in obj) {
        if(key != 'transactionid'){
          temp.push(obj[key]);
        }
      }
      this.rows.push(temp);
    }
    let doc:any = new jsPDF(); 
    doc.autoTable({
      head: [['Date', 'Credit', 'Debit', 'Outstanding', 'Description']],
      body: this.rows
    });
    doc.save('TransactionsTable.pdf');
   }

}
