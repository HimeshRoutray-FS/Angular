import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../model/Product';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GetProductSeriesService } from '../get-product-series.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-view-product-series',
  templateUrl: './view-product-series.component.html',
  styleUrls: ['./view-product-series.component.css']
})
export class ViewProductSeriesComponent implements OnInit {

  error: string = '';
  products: Product[];
  loading: boolean = true;
  @Input('product') product: Product;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['dates' ,'productname', 'quantity', 'productslnofromto'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getProductSeriesService: GetProductSeriesService) { }

  ngOnInit() { }

  ngOnChanges(){
    this.loading = true;
    this.getProductSeriesService.getProductSeries(this.product.companyname, this.product.productname).subscribe(
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
    doc.save('ProductsTable.pdf');
   }
}
