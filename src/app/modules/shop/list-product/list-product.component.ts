import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductComponent implements OnInit {

  products: Product[];

  constructor(private _shopService: ShopService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._shopService.getAll().subscribe(
      (result) => {
        this.products = result;
        console.log(this.products);
      }
    );
  }

}
