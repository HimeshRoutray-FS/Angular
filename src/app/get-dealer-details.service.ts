import { Injectable } from '@angular/core';
import { Dealer } from './model/Dealer';

@Injectable({
  providedIn: 'root'
})
export class GetDealerDetailsService {

  dealer : Dealer;

  constructor() { }
}
