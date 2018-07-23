import { Component, OnInit } from '@angular/core';
import { DataFromApiService } from '../../../services/data-from-api.service';
import { LogService } from '../../../services/log.service';
import { UserClass } from '../../../models/UserClass';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [DataFromApiService, LogService]
})

export class UsersListComponent implements OnInit {
  users: UserClass[] = [];
  error: any;

  constructor(private dataService: DataFromApiService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (data: UserClass[]) => {
        this.users = data;
      },
      error => console.error(error),
      () => {
        console.log('done loading users');
      }
    );
  }
}
