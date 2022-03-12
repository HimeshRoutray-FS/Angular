import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateDealerComponent } from './create-dealer/create-dealer.component';
import { GetAllDealersComponent } from './get-all-dealers/get-all-dealers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSelectModule, MatIconModule} from '@angular/material';
import { GetDealerDetailsComponent } from './get-dealer-details/get-dealer-details.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { GetReportComponent } from './get-report/get-report.component';
import { ViewProductSeriesComponent } from './view-product-series/view-product-series.component';
import { GetTransactionReportComponent } from './get-transaction-report/get-transaction-report.component';
import { GetProductReportComponent } from './get-product-report/get-product-report.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { CustomerKycComponent } from './customer-kyc/customer-kyc.component';
import { GetSingleDealerDetailsComponent } from './get-single-dealer-details/get-single-dealer-details.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateDealerComponent,
    GetAllDealersComponent,
    GetDealerDetailsComponent,
    ViewProductsComponent,
    AddProductComponent,
    AddTransactionComponent,
    ViewTransactionsComponent,
    GetReportComponent,
    ViewProductSeriesComponent,
    ViewProductSeriesComponent,
    GetTransactionReportComponent,
    GetProductReportComponent,
    GetAllCustomersComponent,
    CustomerKycComponent,
    GetSingleDealerDetailsComponent,
    ProfilesComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
