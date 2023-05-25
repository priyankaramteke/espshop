import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: any;
  mycartproduct = new Subject<string>();

  constructor() { }


  getSelectedProduct() {
    return this.selectedProduct;
  }
  getproductDetails(id: any){
    for(let i = 0; i < this.selectedProduct.length; i++){
      if(this.selectedProduct[i].id == id){
        return this.selectedProduct[i]
      }
    }
  }

  setSelectedProduct(info: any) {
    this.selectedProduct = info;
  }
  // mycartproduct = new BehaviorSubject('')
}
