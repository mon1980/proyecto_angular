import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {
products
  constructor(
    public route: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    console.log('hola');
    this.route.params
      .subscribe(params => {
        this.productsService.searchProducts(params.searchValue)
          .subscribe(
            (res: HttpResponse<any>) => {
              this.products = res;
            },
            (error: HttpErrorResponse) => console.log(error)
          )
      });
  }

}