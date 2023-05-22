import { Injectable } from '@angular/core';

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
}
