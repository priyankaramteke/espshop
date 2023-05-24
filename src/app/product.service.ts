import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: any;
  constructor() { }


  getSelectedProduct() {
    return this.selectedProduct;
  }

  setSelectedProduct(info: any) {
    this.selectedProduct = info;
  }
  mycartproduct = new Subject<any>()
  // mycartproduct = new BehaviorSubject('')
}
