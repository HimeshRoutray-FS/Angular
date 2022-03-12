import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { MatTableDataSource } from '@angular/material';
import { GetProductsService } from '../get-products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  error: string = '';
  products: Product[];
  loading: boolean = true;
  product: Product;

  displayedColumns: string[] = ['productname', 'quantity'];
  dataSource = new MatTableDataSource([]);
  
  constructor(private getProductsService: GetProductsService) { }

  ngOnInit() {
    this.getProductsService.getProducts().subscribe(
      (res: Product[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No product to display.';
        }
        else{
          this.error = '';
          this.products = res;
          this.dataSource.data = this.products;
        }
      },
      (err) => {
        this.loading = false;
          this.error = err;
        }
      );
  }

  getProductSeries(product: Product){
      this.product = product;
  }

}
