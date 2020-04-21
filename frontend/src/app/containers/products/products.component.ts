import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() public product: any;
  @Input() public rate: number;
  @Input() public currency: string;
  constructor(public productsService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res => this.productsService.setProducts(res), error => console.log(error))
  }
  mostrarDetalleProducto(productId:number) {
    // this.router.navigate(['product/'+productId])
    this.router.navigate(['product', productId ])
  }
}
