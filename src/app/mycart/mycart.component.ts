import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {

  constructor(private router:ActivatedRoute, private productService: ProductService){
    this.productService.mycartproduct.subscribe((cartpro:any) =>{
      console.log('ghgffh',cartpro)
    })
  }

  // ClickMe(){
  //   console.log("ehhh")
  //   this.Doublec();
  // }

  // Doublec(){
  //   console.log("Dudsfsfs")
  // }
}
