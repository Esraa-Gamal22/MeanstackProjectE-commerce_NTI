import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  recivedCatId: any ;

  //array before filteration
  productsArray = [
    
  ];
  // array after filtiration
  filterdArray:any = [];

  constructor(
   
  ) {}

  ngOnInit(): void {
   
    this.filterCatProducts();
  }
  
  filterCatProducts() {
    this.prdService
      .getProductsByCatId(this.recivedCatId)
      .subscribe((products) => {
        this.filterdArray = products.data;
      });
  }
}