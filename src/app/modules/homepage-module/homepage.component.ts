import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataFromApiService} from '../../services/data-from-api.service';
import {LogService} from '../../services/log.service';
import {AdvertisementClass} from '../../models/AdvertisementClass';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataFromApiService, LogService]
})

export class HomepageComponent implements OnInit {
  advertisements: AdvertisementClass[] = [];
  error: any;

  constructor(private router: Router,
              private dataService: DataFromApiService,
              private logService: LogService) {
  }

  ngOnInit() {
    this.dataService.getAdvertisements().subscribe(
      (data: AdvertisementClass[]) => {
        this.advertisements = data;
      },
      error => {
        this.logService.add('DataFromApiService: ' + error);
        console.error(error);
      },
      () => {
        console.log('done loading advertisements');
      });

    setTimeout(() => {
      this.router.navigate(['app/feed']);
    }, 500);
  }
}
