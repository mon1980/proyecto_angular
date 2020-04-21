import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
finalCarrito;
toggle:boolean=true;
  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
    this.finalCarrito= JSON.parse(localStorage.getItem('carrito'))
    console.log(this.finalCarrito)
  }
enviarPedido(){
this.orderService.crearPedido(this.finalCarrito)
.subscribe((res)=>{
  console.log(res)
  this.toggle=false;
  setTimeout(() => {
    this.toggle=true;
  }, 3000);
})
}
}
