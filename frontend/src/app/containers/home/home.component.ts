
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public product: any;
  @Input() public rate: number;
  @Input() public currency: string;

  constructor(public productsService:ProductsService, private router:Router) { }

 

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res=>this.productsService.setProducts(res))
  }

  mostrarDetalleProducto(productId:number){
  this.router.navigate(['product', productId ])
}
}
