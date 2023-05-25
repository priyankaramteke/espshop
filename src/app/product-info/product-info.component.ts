import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Data } from '../data_model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  Drinkssection: any = [];
  Drinkss: any = [];
  breadEggssection: any = [];
  productList: any = [];
  selectId: any;
  quantity = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    // this.productService.mycartproduct.subscribe((cartpro:any) =>{
    //   console.log(cartpro)
    //   this.mycartprod = cartpro
    // })
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      console.log(param.get('id'))
      this.selectId = param.get('id')

    })

    this.productList = Data.find(r => r['id'] === this.selectId)

    console.log(this.productList)

    // this.Drinkssection = [
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Red Bull Energy Drink (250 ml)',
    //     kg: '250ml',
    //     rs: '128 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/3thums.png',
    //     thumbImage: 'assets/drinksimgsection/3thums.png',
    //     name: 'Thums Up Soft Drink (750 ml)',
    //     kg: '700ml',
    //     rs: '75 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/1orang.png',
    //     thumbImage: 'assets/drinksimgsection/1orang.png',
    //     name: 'Tropicana 100% Orange Juice',
    //     kg: '250ml',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/4maaza.png',
    //     thumbImage: 'assets/drinksimgsection/4maaza.png',
    //     name: 'Maaza Mango Drink 1.2 l',
    //     kg: '1000ml',
    //     rs: '70 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/5rose.png',
    //     thumbImage: 'assets/drinksimgsection/5rose.png',
    //     name: 'Hamdard Rooh Afza Rose Sharbat',
    //     kg: '200ml',
    //     rs: '91 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/6realf.png',
    //     thumbImage: 'assets/drinksimgsection/6realf.png',
    //     name: 'Real Fruit Power Cranberry Juice',
    //     kg: '200ml',
    //     rs: '117 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/7pulpyor.png',
    //     thumbImage: 'assets/drinksimgsection/7pulpyor.png',
    //     name: 'Minute Maid Pulpy Orange Fruit Drink',
    //     kg: '250ml',
    //     rs: '86 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/1orang.png',
    //     thumbImage: 'assets/drinksimgsection/1orang.png',
    //     name: 'Tropicana 100% Orange Juice',
    //     kg: '250ml',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Red Bull Energy Drink (250 ml)',
    //     kg: '250ml',
    //     rs: '128 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/3thums.png',
    //     thumbImage: 'assets/drinksimgsection/3thums.png',
    //     name: 'Thums Up Soft Drink (750 ml)',
    //     kg: '700ml',
    //     rs: '75 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/8mixedfruit.png',
    //     thumbImage: 'assets/drinksimgsection/8mixedfruit.png',
    //     name: 'B Natural Mixed Fruit Juice - Buy 1 Get 1 Free',
    //     kg: '1l',
    //     rs: '137 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Red Bull Energy Drink (250 ml)',
    //     kg: '750ml',
    //     rs: '228 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/9soda.png',
    //     thumbImage: 'assets/drinksimgsection/9soda.png',
    //     name: 'Bisleri Soda Water',
    //     kg: '750ml',
    //     rs: '28 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/6realf.png',
    //     thumbImage: 'assets/drinksimgsection/6realf.png',
    //     name: 'Real Fruit Power Cranberry Juice',
    //     kg: '200ml',
    //     rs: '117 Rs'

    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Red Bull Energy Drink (250 ml)',
    //     kg: '250ml',
    //     rs: '128 Rs'

    //   },


    // ];

    // this.Drinkss = [
    //   {
    //     image: 'assets/drinksimgsection/1orang.png',
    //     thumbImage: 'assets/drinksimgsection/1orang.png',
    //     name: 'Orange Juice',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Energy Drink',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/3thums.png',
    //     thumbImage: 'assets/drinksimgsection/3thums.png',
    //     name: ' Soft Drink',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/4maaza.png',
    //     thumbImage: 'assets/drinksimgsection/4maaza.png',
    //     name: ' Mango Drink ',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/5rose.png',
    //     thumbImage: 'assets/drinksimgsection/5rose.png',
    //     name: 'Rooh Afza',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/1orang.png',
    //     thumbImage: 'assets/drinksimgsection/1orang.png',
    //     name: 'Orange Juice',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Energy Drink',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/9soda.png',
    //     thumbImage: 'assets/drinksimgsection/9soda.png',
    //     name: 'Bisleri Soda Water',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/6realf.png',
    //     thumbImage: 'assets/drinksimgsection/6realf.png',
    //     name: 'Cranberry Juice',

    //   },
    //   {
    //     image: 'assets/drinksimgsection/7pulpyor.png',
    //     thumbImage: 'assets/drinksimgsection/7pulpyor.png',
    //     name: 'Orange Fruit Drink',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/8mixedfruit.png',
    //     thumbImage: 'assets/drinksimgsection/8mixedfruit.png',
    //     name: ' Mixed Fruit Juice',

    //   },
    //   {
    //     image: 'assets/drinksimgsection/2red.png',
    //     thumbImage: 'assets/drinksimgsection/2red.png',
    //     name: 'Energy Drink',
    //   },
    //   {
    //     image: 'assets/drinksimgsection/9soda.png',
    //     thumbImage: 'assets/drinksimgsection/9soda.png',
    //     name: 'Bisleri Soda Water',
    //   },
    // ];
    // this.breadEggssection = [
    //   {
    //     image: 'assets/imgcardsection/1card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/2card.png',
    //     name: 'Nestle Milkmaid Sweetened Condensed..',
    //     kg: '380g',
    //     rs: '138 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/3card.png',
    //     name: 'Amul Taaza Toned Fresh Milk',
    //     kg: '500ml',
    //     rs: '27 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/4card.png',
    //     name: 'Britannia 100% Whole Wheat Breads',
    //     kg: '400g',
    //     rs: '50 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/5card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '91 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/6card.png',
    //     name: 'Amul Fresh Malai Paneer',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/7card.png',
    //     name: 'Amul Salted Butter',
    //     kg: '100g',
    //     rs: '56 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/1card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/1card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/1card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },
    //   {
    //     image: 'assets/imgcardsection/1card.png',
    //     name: 'Amul Cheese Cubes',
    //     kg: '200g',
    //     rs: '127 Rs'

    //   },



    // ]
  }
  subtracpro(i: any) {

    console.log(i)
    if (this.productList['subcat'][0]['data'][i]['cartCount'] > 0) {
      this.productList['subcat'][0]['data'][i]['cartCount'] = this.productList['subcat'][0]['data'][i]['cartCount'] - 1
    }

    // console.log(info)
    // if (info.qnt != 1) {
    //   info.qnt -= 1;
    // }
  }
  addpro(i: number) {
    console.log(i)
    let cartpro = this.productList['subcat'][0]['data'][i]['cartCount'] = this.productList['subcat'][0]['data'][i]['cartCount'] + 1;
    console.log(this.productList['subcat'][0]['data'])

    this.productService.mycartproduct.next(this.productList['subcat'][0]['data'])
  }
  mycartprod(cartpro: any) {
    console.log(cartpro);

    // this.mycartproduct = cartpro.value
    // this.productService.mycartproduct.next(cartpro)
  }

}









