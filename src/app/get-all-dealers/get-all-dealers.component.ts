import { Component, OnInit, ViewChild } from '@angular/core';
import { Dealer } from '../model/Dealer';
import { GetAllDealersService } from '../get-all-dealers.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { GetDealerDetailsService } from '../get-dealer-details.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-get-all-dealers',
  templateUrl: './get-all-dealers.component.html',
  styleUrls: ['./get-all-dealers.component.css']
})
export class GetAllDealersComponent implements OnInit {

  error: string = '';
  dealers: Dealer[];
  loading: boolean = true;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['companyname', 'dealername', 'district', 'address', 'email', 'mobile', 'pan', 'gst'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getAllDealersService: GetAllDealersService, private getDealerDetailsService: GetDealerDetailsService, private router: Router) { }

  ngOnInit() {
    this.getAllDealersService.getAllDealers().subscribe(
      (res: Dealer[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No dealer to display.';
        }
        else{
          this.error = '';
          this.dealers = res;
          this.dataSource.data = this.dealers;
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

  getDealerDetails(dealer: Dealer){
    this.getDealerDetailsService.dealer = dealer;
    this.router.navigate(['getdealerdetails']);
  }

  print() {
    this.rows = [];
    for (let obj of this.renderedData) {
      var temp = [];
      for (let key in obj) { 
        if(key != 'slno'){
          temp.push(obj[key]);
        }
      }
      this.rows.push(temp);
    }
    let doc:any = new jsPDF(); 
    doc.autoTable({
      head: [['Company Name', 'Dealer Name', 'District', 'Address', 'Email', 'Mobile', 'PAN', 'GST']],
      body: this.rows
    });
    doc.save('DealersTable.pdf');
   }
}
