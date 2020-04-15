import { TematicasService } from 'src/app/services/tematicas.service';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public admin = ['superAdmin', 'admin', 'dios'];
  constructor(
    public productsService: ProductsService,
    public userService: UserService,
    public tematicasService: TematicasService,
    public router: Router

  ) { }

  logout() {
    // esto elimina el token de localStorage
    localStorage.removeItem('authToken');
    // quita el usuario del servicio, entonces ya no aparece en header
    this.userService.setUser({})

    
  }
  searchProducts(event) {
    const searchValue = event.target.search.value;
    this.router.navigate(['/products/search', searchValue]);
  }
}

















