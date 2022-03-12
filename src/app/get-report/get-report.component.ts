import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../model/Report';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GetReportService } from '../get-report.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-report',
  templateUrl: './get-report.component.html',
  styleUrls: ['./get-report.component.css']
})
export class GetReportComponent implements OnInit {

  error: string = '';
  reports: Report[];
  loading: boolean = true;
  report: Report;
  renderedData: any;
  rows = [];

  displayedColumns: string[] = ['companyname', 'dealername', 'district', 'mobile', 'outstanding'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getReportService: GetReportService) { }

  ngOnInit() {
    this.getReportService.getReport().subscribe(
      (res: Report[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No report to display.';
        }
        else{
          this.error = '';
          this.reports = res;
          this.dataSource.data = this.reports;
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

  getDetailedReport(report: Report){
    this.report = report;
  }

  print() {
    this.rows = [];
    for (let obj of this.renderedData) {
      var temp = [];
      for (let key in obj) {
        temp.push(obj[key]);
      }
      this.rows.push(temp);
    }
    let doc:any = new jsPDF(); 
    doc.autoTable({
      head: [['Company Name', 'Dealer Name', 'District', 'Mobile', 'Outstanding']],
      body: this.rows
    });
    doc.save('ReportTable.pdf');
   }
}
