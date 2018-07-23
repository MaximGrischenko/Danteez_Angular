import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user: any;
  avatarStyle = {};
  ngOnInit() {
    const user = sessionStorage.getItem('Logged user');
    this.user = JSON.parse(user);

    this.avatarStyle = {
      backgroundImage: `url(${this.user.url})`,
      backgroundSize: 'cover',
    };
  }
}
