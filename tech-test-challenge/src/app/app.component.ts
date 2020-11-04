import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {    

  items = 0;

  onActivate(data){    
    data.onCountChange.subscribe((res) => {      
      this.items = res.length;      
   }) 
  }    
}