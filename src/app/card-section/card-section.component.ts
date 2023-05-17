import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {
  imgCollectionCard: any = []

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  constructor() {

  }
  ngOnInit() {

    this.imgCollectionCard = [
      {
        image: 'assets/imgcardsection/1card.png',
        thumbImage: 'assets/imgcardsection/1card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '127 Rs'

      },
      {
        image: 'assets/imgcardsection/2card.png',
        name: 'Nestle Milkmaid Sweetened Condensed Milk',
        kg: '380g',
        rs: '138 Rs'

      },
      {
        image: 'assets/imgcardsection/3card.png',
        name: 'Amul Taaza Toned Fresh Milk',
        kg: '500ml',
        rs: '27 Rs'

      },
      {
        image: 'assets/imgcardsection/4card.png',
        name: 'Britannia 100% Whole Wheat Breads',
        kg: '400g',
        rs: '50 Rs'

      },
      {
        image: 'assets/imgcardsection/5card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '91 Rs'

      },
      {
        image: 'assets/imgcardsection/6card.png',
        name: 'Amul Fresh Malai Paneer',
        kg: '200g',
        rs: '127 Rs'

      },
      {
        image: 'assets/imgcardsection/7card.png',
        name: 'Amul Salted Butter',
        kg: '100g',
        rs: '56 Rs'

      },
      {
        image: 'assets/imgcardsection/1card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '127 Rs'

      },
      {
        image: 'assets/imgcardsection/1card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '127 Rs'

      },
      {
        image: 'assets/imgcardsection/1card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '127 Rs'

      },
      {
        image: 'assets/imgcardsection/1card.png',
        name: 'Amul Cheese Cubes',
        kg: '200g',
        rs: '127 Rs'

      },



    ]

    console.log(this.imgCollectionCard)
  }

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized', e);
    return e.slick({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    })
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
