import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: []
})
export class CheckoutPageComponent implements OnInit {

  @Output() onCountChange: EventEmitter<any> = new EventEmitter<any>();

  currentPrice = 0;    
  checkOutList: Product[];

  constructor(private service: ProductService, private routes: Router, private location: Location) { }

  ngOnInit() {
    this.checkOutList = this.service.checkOutList;
    this.onCountChange.emit(this.checkOutList);  
    this.calculatePrice();        
  }

  removeFromBasket(pos){    
    this.checkOutList.splice(pos, 1);
    this.onCountChange.emit(this.checkOutList);    
    this.calculatePrice();    
  }

  navigateProducts() {
    this.routes.navigate(['/products']);
  }

  backClicked(){
    this.location.back();
  }  

  calculatePrice(){
    this.currentPrice = 0;
    this.checkOutList.forEach(element => {
      this.currentPrice += element['price'];
    });    
    console.log("Sub Cost: " + this.currentPrice);    
    this.service.calculateShippingCost(this.currentPrice);     
  }  
  
  confirmOrder(){
    this.checkOutList = [];
    this.service.checkOutList = [];
    this.onCountChange.emit(this.checkOutList);  
    this.routes.navigate(['/result']);
  }
}
