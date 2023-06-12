import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { FooterComponent } from './footer/footer.component';
import { PagnotComponent } from './pagnot/pagnot.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeComponent } from './home/home.component';
import { BodySectonComponent } from './body-secton/body-secton.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'home', component:HeaderComponent},
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'card-section', component: CardSectionComponent },
  {path:'prodetails', component:ProdetailsComponent},
  { path: 'product-item', component: ProductItemComponent },
  { path: 'product-info', component: ProductInfoComponent },
  { path: 'body-secton', component: BodySectonComponent },
  {path:'mycart', component:MycartComponent},
  { path: 'footer', component: FooterComponent },
  { path: '**', component: PagnotComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
