import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { UserComponent } from './containers/user/user.component';
import { ProductsComponent } from './containers/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { TematicasComponent } from './containers/tematicas/tematicas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistroComponent } from './containers/registro/registro.component'; 
import { FormsModule } from '@angular/forms';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    ProductsComponent,
    TematicasComponent,
    NotFoundComponent,
    LoginComponent,
    RegistroComponent,
    SearchProductsComponent,
    ProductDetailComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
