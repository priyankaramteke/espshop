import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nameSearch: string = '';
  cartCountItem: any;
  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.mycartproduct.subscribe((cartpro: any) => {
      this.cartCountItem = cartpro.length
    })

  }
  gotoHome() {
    this.router.navigate([''])
  }
  gotomycart() {
    this.router.navigate(['mycart'])
  }


}
