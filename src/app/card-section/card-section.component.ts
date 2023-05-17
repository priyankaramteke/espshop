import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {
  imgCollectionCard:any=[]
  constructor(){

  }
  ngOnInit(){

   this.imgCollectionCard =[
      {
        image:'assets/imgcardsection/1card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'127 Rs'

      },
     {
        image:'assets/imgcardsection/2card.png',
        name:'Nestle Milkmaid Sweetened Condensed Milk',
        kg:'380g',
        rs:'138 Rs'
        
      },
      {
        image:'assets/imgcardsection/3card.png',
        name:'Amul Taaza Toned Fresh Milk',
        kg:'500ml',
        rs:'27 Rs'
        
      },
      {
        image:'assets/imgcardsection/4card.png',
        name:'Britannia 100% Whole Wheat Breads',
        kg:'400g',
        rs:'50 Rs'
        
      },
      {
        image:'assets/imgcardsection/5card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'91 Rs'
        
      },
      {
        image:'assets/imgcardsection/6card.png',
        name:'Amul Fresh Malai Paneer',
        kg:'200g',
        rs:'127 Rs'
        
      },
      {
        image:'assets/imgcardsection/7card.png',
        name:'Amul Salted Butter',
        kg:'100g',
        rs:'56 Rs'
        
      },
      {
        image:'assets/imgcardsection/1card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'127 Rs'
        
      },
      {
        image:'assets/imgcardsection/1card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'127 Rs'
        
      },
      {
        image:'assets/imgcardsection/1card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'127 Rs'
        
      },
      {
        image:'assets/imgcardsection/1card.png',
        name:'Amul Cheese Cubes',
        kg:'200g',
        rs:'127 Rs'
        
      },

      

    ]
    console.log(this.imgCollectionCard)
  }
}
