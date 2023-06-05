import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent {
 procardetai:any =[];
 mycartproduct:any=[]
  constructor(private router: ActivatedRoute, private productService: ProductService){}

  ngOnInit(){
    var params:any = this.router.params;
    var id: any = params.value.id;
    this.procardetai = this.productService.mycartproduct;
  }

}
