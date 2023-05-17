import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: any = [];

  constructor() { }

  ngOnInit() {
    
    
   
    this.product = [
      {
      name: 'pet-care',
      img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/Pet-Care_WEB.jpg'
    },
    {
      name: 'summer',
      img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/summer_WEB.jpg'
    },
    {
      name:'electronic',
      img:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/electronic-WEB-1.jpg'
    },
    {
      name:'mango',
      img:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/mango-WEB-1.png'
    },
    {
      name:'babycare',
      img:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2023-03/babycare-WEB.jpg'
    },

    {
      name:'staples',
      img:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2023-03/staples-WEB.jpg'
    },
    {
      name:'pharmacy',
      img:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/pharmacy-WEB.jpg'
    }

  ]
  console.log(this.product)
}
}
