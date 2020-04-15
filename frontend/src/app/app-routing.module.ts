import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './containers/user/user.component';
import { ProductsComponent } from './containers/products/products.component';
import { TematicasComponent } from './containers/tematicas/tematicas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'user',component:UserComponent},
  {path:'products',component:ProductsComponent},
  {path:'tematicas',component:TematicasComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistroComponent},
  { path: 'products/search/:searchValue', component: SearchProductsComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  {path: '**',component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






 













