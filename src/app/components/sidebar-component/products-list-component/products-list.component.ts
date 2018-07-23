import { Component, OnInit } from '@angular/core';
import { DataFromApiService } from '../../../services/data-from-api.service';
import { LogService } from '../../../services/log.service';
import { ProductClass } from '../../../models/ProductClass';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [DataFromApiService, LogService]
})

export class ProductsListComponent implements OnInit {
  products: ProductClass[] = [];
  error: any;

  constructor(private dataService: DataFromApiService) {}

  ngOnInit() {
    this.dataService.getProducts().subscribe(
      (data: ProductClass[]) => {
        this.products = data;
      },
      error => console.error(error),
      () => {
        console.log('done loading products');
      }
    );
  }
}
