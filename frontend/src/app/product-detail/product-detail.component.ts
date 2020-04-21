import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product;
  public cantidad=1;
  carrito:Object={};
  oldCarrito:Array<{}>=[];
  constructor(public productsService: ProductsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  const id = this.route.snapshot.params.id;
  this.productsService.getOne(id)
  .subscribe(res=>{ this.product = res; console.log(this.product);});
  }

guardarCesta(){
  this.carrito=({id:this.product['id'], name:this.product['name'], price:this.product['price'], image_path:this.product['image_path'], cantidad:this.cantidad })

  if(localStorage.getItem("carrito")){
this.oldCarrito=JSON.parse(localStorage.getItem('carrito'))
localStorage.removeItem('carrito')
this.oldCarrito.push(this.carrito)
localStorage.setItem("carrito", JSON.stringify(this.oldCarrito))
  }else{localStorage.setItem("carrito", JSON.stringify([this.carrito]))}

}

}


