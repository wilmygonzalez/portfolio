import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private _shopService: ShopService,
    private _modalService: ModalService) { }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      category: new FormControl('', [Validators.maxLength(255)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      price: new FormControl(0, Validators.required),
      discount: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      imageUrl: new FormControl(null)
    });
  }

  addProduct() {
    this._shopService.addProduct(this.productForm.value)
      .then(() => {
        console.log("sucessfull");
      })
      .catch(err => console.log(err));
  }

  close(){
    this._modalService.close();
  }

}
