import { OrderService } from './../../services/order.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
finalCarrito;
cart;
newCart;
toggle:boolean=true;


  constructor(public orderService:OrderService, public router:Router) { }

  ngOnInit(): void {
    this.finalCarrito= JSON.parse(localStorage.getItem('carrito'))
    console.log(this.finalCarrito);
    if(!this.finalCarrito.length){
      document.body.innerHTML += "<div>Cesta vacia</div>"
    };
  

  }



enviarPedido(){


this.orderService.crearPedido(this.finalCarrito)

.subscribe((res)=>{
  console.log(res)
  this.toggle=false;
  setTimeout(() => {
    this.toggle=true;
  }, 2000);

  setTimeout(() => {
  this.router.navigate([''])
  }, 2000);
})

};



deleteFromCart(id:string){
localStorage.removeItem('carrito')
this.newCart= this.finalCarrito.filter(cuadro=>cuadro.id!==id)
localStorage.setItem("carrito", JSON.stringify(this.newCart))
location.reload();

  
}


}

