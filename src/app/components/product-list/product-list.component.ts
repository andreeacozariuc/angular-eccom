import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  constructor(private httpClient: HttpClient) { }

  products: Array<Product> = [];
  productsFavorite: Array<Product> = [];

  ngOnInit(): void {
    this.httpClient.get<Array<Product>>('http://localhost:3000/products').subscribe(
      value => {
        this.products = value;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('destroy list');
  }
// todo nu am inteles
    handleProductAddedToFavorite(product: Product): void {
      if (this.productsFavorite.find(item => item.id === product.id)) {
        this.productsFavorite = this.productsFavorite.filter(item => item.id !== product.id);
      } else {
        this.productsFavorite.push(product);
      }
    }

  ngAfterViewInit(): void {
    console.log('after view list');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes list');
  }

}
