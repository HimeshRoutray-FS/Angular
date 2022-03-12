import { Component, OnInit } from '@angular/core';
import { Report } from '../model/Report';
import { GetUserDetailsService } from '../get-user-details.service';

@Component({
  selector: 'app-get-single-dealer-details',
  templateUrl: './get-single-dealer-details.component.html',
  styleUrls: ['./get-single-dealer-details.component.css']
})
export class GetSingleDealerDetailsComponent implements OnInit {

  report: Report;

  constructor(private getUserDetailsService: GetUserDetailsService) { }

  ngOnInit() {
    this.report = new Report(this.getUserDetailsService.user.companyname, '', '', '', '');
  }

}
