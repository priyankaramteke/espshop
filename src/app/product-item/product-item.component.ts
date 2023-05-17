import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  productItem: any = []
  constructor() {

  }
  ngOnInit() {
    this.productItem = [
      {

        img: 'assets/images/Slice-2_10.png'
      },
      {

        img: 'assets/images/Slice-3_9.png'
      },
      {

        img: 'assets/images/Slice-4_9.png'
      },
      {

        img: 'assets/images/Slice-5_4.png'
      },
      {

        img: 'assets/images/Slice-6_5.png'
      },
      {

        img: 'assets/images/Slice-7_3.png'
      },
      {

        img: 'assets/images/Slice-8_4.png'
      },
      {

        img: 'assets/images/Slice-9_3.png'
      },
      {

        img: 'assets/images/Slice-10.png'
      },
      {

        img: 'assets/images/Slice-11.png'
      },
      {

        img: 'assets/images/Slice-12.png'
      },
      {

        img: 'assets/images/Slice-13.png'
      },
      {

        img: 'assets/images/Slice-14.png'
      },
      {

        img: 'assets/images/Slice-15.png'
      },
      {

        img: 'assets/images/Slice-16.png'
      },
      {

        img: 'assets/images/Slice-17.png'
      },
      {

        img: 'assets/images/Slice-18.png'
      },
      {

        img: 'assets/images/Slice-19.png'
      },
      {

        img: 'assets/images/Slice-20.png'
      },
    ]
  }
}
