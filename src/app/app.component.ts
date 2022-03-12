import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  navLinks = [
    { path: 'getalldealers', label:'View Dealers'},
    { path: 'createdealer', label: 'Create Dealer'},
    { path: 'report', label: 'Report'},
    { path: 'getallcustomers', label: 'View Customers'},
    { path: 'customerkyc', label: 'Customer KYC'},
    {path: 'users', label: 'View Users'},
    {path: 'createuser', label: 'Create User'}
  ];

  constructor() {
  }
        
  ngOnInit() {
  }
  
}
