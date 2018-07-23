import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAdvertisementItem]'
})
export class AdvertisementItemDirective {
  constructor (public template: TemplateRef<any>) {}
}
