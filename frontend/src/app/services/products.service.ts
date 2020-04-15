import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  public products: object[];
  constructor(public httpClient: HttpClient) { }
  
  getAll(): Observable<any> {
  return this.httpClient.get('http://localhost:3000/products');
  }

  getOne(id){
  return this.httpClient.get('http://localhost:3000/products/' + id);
  }
 
  setProducts(products): void {
    this.products = products;
  }

  searchProducts(searchValue) {
    return this.httpClient.get('http://localhost:3000/products/name/'+searchValue);
  }
  
}











