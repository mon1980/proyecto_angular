import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll()
    .subscribe(
   res=>this.orderService.crearPedido(res),
   error=>console.log(error)
    );
  }



}
