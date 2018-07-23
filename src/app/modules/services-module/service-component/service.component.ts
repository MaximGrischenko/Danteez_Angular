import { Component, Input } from '@angular/core';
import { ServiceClass } from '../../../models/ServiceClass';

@Component({
  selector: 'app-service-component',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent {
  @Input() service: ServiceClass;
}
