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
  constructor(public productsService: ProductsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  const id = this.route.snapshot.params.id;
  this.productsService.getOne(id)
  .subscribe(res=> this.product = res);
  }

}


