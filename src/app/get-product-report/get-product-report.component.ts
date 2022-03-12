import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GetProductReportService } from '../get-product-report.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Report } from '../model/Report';
import { Product } from '../model/Product';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-get-product-report',
  templateUrl: './get-product-report.component.html',
  styleUrls: ['./get-product-report.component.css']
})
export class GetProductReportComponent implements OnInit {

  error: string = '';
  products: Product[];
  loading: boolean = true;
  @Input('report') report: Report;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['dates' ,'productname', 'quantity', 'productslnofromto'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getProductReportService: GetProductReportService) { }

  ngOnInit() { }

  ngOnChanges(){
    this.loading = true;
    this.getProductReportService.getProductReport(this.report.companyname).subscribe(
      (res: Product[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No product to display.';
        }
        else{
          this.error = '';
          this.products = res;
          this.dataSource.data = this.products;
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
        if(key != 'slno' && key != 'companyname'){
          temp.push(obj[key]);
        }
      }
      this.rows.push(temp);
    }
    let doc:any = new jsPDF(); 
    doc.autoTable({
      head: [['Date' ,'Product Name', 'Quantity', 'Product Serial Number']],
      body: this.rows
    });
    doc.save('ProductsReportTable.pdf');
   }

}
