import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



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
   
    
  }
  
  
}