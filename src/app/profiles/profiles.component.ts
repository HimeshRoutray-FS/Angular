import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GetDealerProfilesService } from '../get-dealer-profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  error: string = '';
  users: User[];
  loading: boolean = true;

  displayedColumns: string[] = ['username', 'password', 'role', 'companyname'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getDealerProfilesService: GetDealerProfilesService) { }

  ngOnInit() {
    this.getDealerProfilesService.getAllUsers().subscribe(
      (res: User[]) => {
        this.loading = false;
        if(res.length == 0){
          this.error = 'No user to display.';
        }
        else{
          this.error = '';
          this.users = res;
          this.dataSource.data = this.users;
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


}
