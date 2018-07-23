import { Component, Input } from '@angular/core';
import { CompanyClass } from '../../../../models/CompanyClass';

@Component({
  selector: 'app-company-component',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent {
  @Input() company: CompanyClass;
}
