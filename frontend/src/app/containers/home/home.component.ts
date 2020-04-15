import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public productsService:ProductsService) { }

  products: object[];

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res=>this.productsService.setProducts(res))
  }

}


