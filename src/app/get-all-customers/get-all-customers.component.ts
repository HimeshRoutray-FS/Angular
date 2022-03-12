import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Customer } from '../model/Customer';
import { GetAllCustomersService } from '../get-all-customers.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  error: string = '';
  customers: Customer[];
  loading: boolean = true;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['dates', 'customerName', 'productName', 'activationDate', 'vehicle', 'mobile',
   'imei', 'idType', 'idNumber', 'rcUrl'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getAllCustomersService: GetAllCustomersService) { }

  ngOnInit() {
    this.getAllCustomersService.getAllCustomers().subscribe(
      (res: Customer[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No customer to display.';
        }
        else{
          this.error = '';
          this.customers = res;
          this.dataSource.data = this.customers;
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
        if(key != 'customerId' && key != 'rcUrl'){
          temp.push(obj[key]);
        }
      }
      this.rows.push(temp);
    }
    let doc:any = new jsPDF(); 
    doc.autoTable({
      head: [['Date', 'Customer Name', 'Product Name', 'Activation Date', 'Vehicle Number', 'Mobile',
      'IMEI', 'ID Type', 'ID Number']],
      body: this.rows
    });
    doc.save('CustomersTable.pdf');
   }

}
