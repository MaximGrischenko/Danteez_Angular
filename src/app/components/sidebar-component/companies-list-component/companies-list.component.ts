import { Component, OnInit } from '@angular/core';
import { DataFromApiService } from '../../../services/data-from-api.service';
import { LogService } from '../../../services/log.service';
import { CompanyClass } from '../../../models/CompanyClass';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  providers: [DataFromApiService, LogService]
})

export class CompaniesListComponent implements OnInit {
  companies: CompanyClass[] = [];
  error: any;

  constructor(private dataService: DataFromApiService) {}

  ngOnInit() {
    this.dataService.getCompanies().subscribe(
      (data: CompanyClass[]) => {
        this.companies = data;
      },
      error => console.error(error),
      () => {
        console.log('done loading companies');
      }
    );
  }
}
