import { Component, OnInit } from '@angular/core';
import { DataFromHttpService } from '../../services/data-from-http.service';
import { LogService } from '../../services/log.service';
import { ServiceClass } from '../../models/ServiceClass';

@Component({
  selector: 'app-services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [DataFromHttpService, LogService]
})

export class ServicesComponent implements OnInit {
  user: any;
  services: ServiceClass[] = [];

  constructor(private dataService: DataFromHttpService, private logService: LogService) {}
  ngOnInit() {
    const user = sessionStorage.getItem('Logged user');
    this.user = JSON.parse(user);

    this.dataService.getServices(this.user.token).subscribe(
      data => {
        this.services = data['data'];
      },
      error => {
        this.logService.add('DataFromHttpService: ' + error);
        console.error(error);
      },
      () => {
      }
    );
  }
}
