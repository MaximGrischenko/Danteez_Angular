import {
  AfterViewInit, Component, ContentChildren, Directive, ElementRef,
  Input, OnInit, QueryList, ViewChild, ViewChildren, OnDestroy,
} from '@angular/core';
import {AdvertisementItemDirective} from './advertisement-item.directive';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Directive({
  selector: '.advertisement-item'
})
export class AdvertisementItemElement {
}

@Component({
  selector: 'app-advertisement',
  exportAs: 'advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})

export class AdvertisementComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private builder: AnimationBuilder) {}

  @ContentChildren(AdvertisementItemDirective) items: QueryList<AdvertisementItemDirective>;
  @ViewChildren(AdvertisementItemElement, {read: ElementRef}) private itemsElements: QueryList<ElementRef>;
  @ViewChild('advertisement') private advertisement: ElementRef;
  @Input() timing = '300ms ease-in-out';

  private player: AnimationPlayer;
  private itemWidth: number;
  private currentAdvertisement = 0;
  private timeout: any;
  advertisementWrapperStyle = {};

  private buildAnimation(offset) {
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${offset}px)`}))
    ]);
  }

  stop() {
    clearTimeout(this.timeout);
  }

  repeat() {
    this.timeout = setTimeout(() => this.next(), 3000);
  }

  next() {
    this.currentAdvertisement = (this.currentAdvertisement + 1 + this.items.length) % this.items.length;
    const offset = this.currentAdvertisement * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.advertisement.nativeElement);
    this.player.play();

    this.timeout = setTimeout(() => this.next(), 3000);
  }

  ngOnInit() {
    this.timeout = setTimeout(() => this.next(), 3000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.advertisementWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    }, 500);
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
