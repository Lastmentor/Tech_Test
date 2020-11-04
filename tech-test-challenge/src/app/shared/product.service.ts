import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  headElements = ['Name', 'Category', 'Price', '']; 
  
  readonly rootURL = 'https://localhost:44381/';
    
  checkOutList: Product[] = [];
  list: Product[];
  shippingCost: any;
  
  constructor(private http: HttpClient) { }   

  calculateShippingCost(data){
    this.http.get(this.rootURL + 'products/cost?price=' + data)
      .toPromise()
      .then(res => this.shippingCost = res as any);
  }

  refreshList(){
    this.http.get(this.rootURL)
      .toPromise()
      .then(res => this.list = res as Product[]);
  }
}
