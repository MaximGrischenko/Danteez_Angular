import { Component, Input } from '@angular/core';
import { UserClass } from '../../../../models/UserClass';

@Component({
  selector: 'app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  @Input() user: UserClass;
}
