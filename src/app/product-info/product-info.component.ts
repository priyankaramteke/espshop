import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  Drinkssection:any=[]
  constructor( private route: ActivatedRoute){
  }

    ngOnInit(){
      this.Drinkssection =[
        {
          image:'assets/drinksimgsection/1orang.png',
          thumbImage: 'assets/drinksimgsection/1orang.png',
          name:'Tropicana 100% Orange Juice',
          kg:'250ml',
          rs:'127 Rs'
  
        },
       {
          image:'assets/drinksimgsection/2red.png',
          thumbImage:'assets/drinksimgsection/2red.png',
          name:'Red Bull Energy Drink (250 ml)',
          kg:'250ml',
          rs:'128 Rs'
  
        },
        {
          image:'assets/drinksimgsection/3thums.png',
          thumbImage:'assets/drinksimgsection/3thums.png',
          name:'Thums Up Soft Drink (750 ml)',
          kg:'700ml',
          rs:'75 Rs'
  
        },
        {
          image:'assets/drinksimgsection/4maaza.png',
          thumbImage:'assets/drinksimgsection/4maaza.png',
          name:'Maaza Mango Drink 1.2 l',
          kg:'1000ml',
          rs:'70 Rs'
  
        },
        {
          image:'assets/drinksimgsection/5rose.png',
          thumbImage:'assets/drinksimgsection/5rose.png',
          name:'Hamdard Rooh Afza Rose Sharbat',
          kg:'200ml',
          rs:'91 Rs'
  
        },
        {
          image:'assets/drinksimgsection/6realf.png',
          thumbImage:'assets/drinksimgsection/6realf.png',
          name:'Real Fruit Power Cranberry Juice',
          kg:'200ml',
          rs:'117 Rs'
  
        },
        {
          image:'assets/drinksimgsection/7pulpyor.png',
          thumbImage:'assets/drinksimgsection/7pulpyor.png',
          name:'Minute Maid Pulpy Orange Fruit Drink',
          kg:'250ml',
          rs:'86 Rs'
  
        },
        {
          image:'assets/drinksimgsection/8mixedfruit.png',
          thumbImage:'assets/drinksimgsection/8mixedfruit.png',
          name:'B Natural Mixed Fruit Juice - Buy 1 Get 1 Free',
          kg:'1l',
          rs:'137 Rs'
  
        },
        {
          image:'assets/drinksimgsection/2red.png',
          thumbImage:'assets/drinksimgsection/2red.png',
          name:'Red Bull Energy Drink (250 ml)',
          kg:'750ml',
          rs:'228 Rs'
  
        },
        {
          image:'assets/drinksimgsection/9soda.png',
          thumbImage:'assets/drinksimgsection/9soda.png',
          name:'Bisleri Soda Water',
          kg:'750ml',
          rs:'28 Rs'
  
        },
  
  
  
      ]
    }
}
