import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: []
})
export class ProductPageComponent implements OnInit {  

  @Output() onCountChange: EventEmitter<any> = new EventEmitter<any>();   

  constructor(private service: ProductService) { }

  addToBasket(data){                    
    this.service.checkOutList = this.service.checkOutList.concat(data);
    this.onCountChange.emit(this.service.checkOutList);    
  }

  ngOnInit() {
    this.service.refreshList();
  }

}