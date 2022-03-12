import { Component, OnInit } from '@angular/core';
import { GetDealerDetailsService } from '../get-dealer-details.service';
import { Dealer } from '../model/Dealer';

@Component({
  selector: 'app-get-dealer-details',
  templateUrl: './get-dealer-details.component.html',
  styleUrls: ['./get-dealer-details.component.css']
})
export class GetDealerDetailsComponent implements OnInit {

  dealer: Dealer;
  status: number = 0;
 
  constructor(private getDealerService: GetDealerDetailsService) { 
  }

  ngOnInit() {
    this.dealer = this.getDealerService.dealer;
  }

  tabChanged(tab: any){
    this.status = tab.index;
}
}
