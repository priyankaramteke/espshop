import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagnotComponent } from './pagnot/pagnot.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BodySectonComponent } from './body-secton/body-secton.component';
import { MycartComponent } from './mycart/mycart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagnotComponent,
    FooterComponent,
    ProductItemComponent,
    CardSectionComponent,
    ProductInfoComponent,
    BodySectonComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
