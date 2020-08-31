import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  constructor() { }

  @Input()
  product: Product;

  @Output() productAddedToFavorite = new EventEmitter<any>();

  addProductToFavorite(): void {
    this.productAddedToFavorite.emit(this.product);
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('destroy item');
  }

  ngAfterViewInit(): void {
    console.log('after view item');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes item');
  }
}
