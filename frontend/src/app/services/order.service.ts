import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class OrderService {
    public orders: object[]
    private token: string;
    constructor(public httpClient: HttpClient) { }


    setProducts(orders): void {
        this.orders = orders;
      };
    
    getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/orders');
    }
  
    crearPedido(productos){
      this.token=localStorage.getItem('authToken');
    return this.httpClient.post('http://localhost:3000/orders',{deliveryDate:"2020-05-15", productos}, {headers: {Authorization: this.token}})
  }  
    
  }
  
  
  
  
  
  
  
  
  
  
  
  