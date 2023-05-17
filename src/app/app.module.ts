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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagnotComponent,
    FooterComponent,
    ProductItemComponent,
    CardSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
