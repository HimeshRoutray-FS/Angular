import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Transaction } from '../model/Transaction';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Report } from '../model/Report';
import { GetTransactionReportService } from '../get-transaction-report-service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-get-transaction-report',
  templateUrl: './get-transaction-report.component.html',
  styleUrls: ['./get-transaction-report.component.css']
})
export class GetTransactionReportComponent implements OnInit {

  error: string = '';
  transactions: Transaction[];
  loading: boolean = true;
  @Input('report') report: Report;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['dates', 'credit', 'debit', 'outstanding', 'description'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getTransactionReportService: GetTransactionReportService) { }

  ngOnInit() { }

  ngOnChanges() {
    this.loading = true;
    this.getTransactionReportService.getTransactionsReport(this.report.companyname).subscribe(
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
    doc.save('TransactionsReportTable.pdf');
   }
}
