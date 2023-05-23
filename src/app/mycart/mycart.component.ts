import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {

  constructor(private router:ActivatedRoute){}

  // ClickMe(){
  //   console.log("ehhh")
  //   this.Doublec();
  // }

  // Doublec(){
  //   console.log("Dudsfsfs")
  // }
}
