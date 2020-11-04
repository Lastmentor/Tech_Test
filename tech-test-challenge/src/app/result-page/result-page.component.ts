import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styles: []
})
export class ResultPageComponent implements OnInit {

  navigateProducts() {
    this.routes.navigate(['/products']);
  }

  constructor(private routes: Router) { }

  ngOnInit() {
  }

}
