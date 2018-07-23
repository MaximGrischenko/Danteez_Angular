import { Component, Input } from '@angular/core';
import { ProductClass } from '../../../../models/ProductClass';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: ProductClass;
}
