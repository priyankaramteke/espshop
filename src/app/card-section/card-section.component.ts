import { Component } from '@angular/core';


@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {
  imgCollectionCard: any = [];
  Drinkssection: any = [];
  nameSearch:string='';
  quantity = 0;
  slides = [{ img: '' }]
  constructor() {

  }
  ngOnInit() {

    this.imgCollectionCard = [{ "image": "assets/imgcardsection/1card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/2card.png", "name": "Nestle Milkmaid Sweetened Condensed..", "kg": "380g", "rs": "138 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/3card.png", "name": "Amul Taaza Toned Fresh Milk", "kg": "500ml", "rs": "27 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/4card.png", "name": "Britannia 100% Whole Wheat Breads", "kg": "400g", "rs": "50 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/5card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "91 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/6card.png", "name": "Amul Fresh Malai Paneer", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/7card.png", "name": "Amul Salted Butter", "kg": "100g", "rs": "56 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/8card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/9card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/10card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }, { "image": "assets/imgcardsection/11card.png", "name": "Amul Cheese Cubes", "kg": "200g", "rs": "127 Rs", "cartCount": 0 }]



    this.Drinkssection = [{"image":"assets/drinksimgsection/1orang.png","thumbImage":"assets/drinksimgsection/1orang.png","name":"Tropicana 100% Orange Juice","kg":"250ml","rs":"127 Rs","cartCount":0},{"image":"assets/drinksimgsection/2red.png","thumbImage":"assets/drinksimgsection/2red.png","name":"Red Bull Energy Drink (250 ml)","kg":"250ml","rs":"128 Rs","cartCount":0},{"image":"assets/drinksimgsection/3thums.png","thumbImage":"assets/drinksimgsection/3thums.png","name":"Thums Up Soft Drink (750 ml)","kg":"700ml","rs":"75 Rs","cartCount":0},{"image":"assets/drinksimgsection/4maaza.png","thumbImage":"assets/drinksimgsection/4maaza.png","name":"Maaza Mango Drink 1.2 l","kg":"1000ml","rs":"70 Rs","cartCount":0},{"image":"assets/drinksimgsection/5rose.png","thumbImage":"assets/drinksimgsection/5rose.png","name":"Hamdard Rooh Afza Rose Sharbat","kg":"200ml","rs":"91 Rs","cartCount":0},{"image":"assets/drinksimgsection/6realf.png","thumbImage":"assets/drinksimgsection/6realf.png","name":"Real Fruit Power Cranberry Juice","kg":"200ml","rs":"117 Rs","cartCount":0},{"image":"assets/drinksimgsection/7pulpyor.png","thumbImage":"assets/drinksimgsection/7pulpyor.png","name":"Minute Maid Pulpy Orange Fruit Drink","kg":"250ml","rs":"86 Rs","cartCount":0},{"image":"assets/drinksimgsection/8mixedfruit.png","thumbImage":"assets/drinksimgsection/8mixedfruit.png","name":"B Natural Mixed Fruit Juice - Buy 1 Get 1 Free","kg":"1l","rs":"137 Rs","cartCount":0},{"image":"assets/drinksimgsection/9soda.png","thumbImage":"assets/drinksimgsection/9soda.png","name":"Bisleri Soda Water","kg":"750ml","rs":"28 Rs","cartCount":0}]
   
     

    
    this.Drinkssection = this.Drinkssection.map((r: any) => {
      r['cartCount'] = 0;
      return r;
    })



  }

  slideConfig = {
    // centerMode: true,
    centerPadding: '6px',
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
   
  }

 
  addCart(category: any) {
    // console.log(category)
  }
  subtraprod(i: any) {
    console.log(i)
    if (this.imgCollectionCard[i]['cartCount'] > 0) {
      this.imgCollectionCard[i]['cartCount'] = this.imgCollectionCard[i]['cartCount'] - 1;
    }
  }

  addprod(i: number) {
    // console.log(i)
    this.imgCollectionCard[i]['cartCount'] = this.imgCollectionCard[i]['cartCount'] + 1;
  }
  subtraproducttwo(i:any){
    console.log(i)
    if (this.Drinkssection[i]['cartCount'] > 0) {
      this.Drinkssection[i]['cartCount'] = this.Drinkssection[i]['cartCount'] - 1;
    }
  }
  addproducttwo(i:number){
this.Drinkssection[i]['cartCount'] =this.Drinkssection[i]['cartCount'] + 1
  }
}
