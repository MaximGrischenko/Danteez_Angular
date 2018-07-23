import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './services/auth.service';
import {LogService} from './services/log.service';
import {LoggedUserClass} from "./models/LoggedUserClass";
import {UserClass} from "./models/UserClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, LogService]
})
export class AppComponent implements OnInit {

  user: {};

  constructor(private router: Router,
              private authService: AuthService,
              private logService: LogService) {
  }

  ngOnInit() {
    this.authService.getUser().subscribe(
      (data: LoggedUserClass[]) => {
        this.user = data[0];
      },
      error => {
        this.logService.add('DataFromApiService: ' + error);
        console.log(error);
      },
      () => {
        sessionStorage.setItem('Logged user', JSON.stringify(this.user));
      }
    );

    setTimeout(() => {
      this.router.navigate(['app']);
    }, 500);
  }
}
