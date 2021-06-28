import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ModalService } from 'src/app/core/services/modal.service';
import { ShopService } from 'src/app/core/services/shop.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductComponent implements OnInit {
  @ViewChild('modalContent', { read: ViewContainerRef }) entry: ViewContainerRef;
  
  products: Product[];

  constructor(
    private _shopService: ShopService,
    private _modalService: ModalService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  test(){
    this._modalService.open(AddProductComponent, this.entry);
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
