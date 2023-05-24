import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nameSearch:string='';
  constructor(private router: Router) {

  }
  gotoHome() {
    this.router.navigate([''])
  }
  gotomycart(){
    this.router.navigate(['mycart'])
    }


}
