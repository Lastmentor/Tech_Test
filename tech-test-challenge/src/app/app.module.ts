import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ProductService } from './shared/product.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { ResultPageComponent } from './result-page/result-page.component';

const appRoutes: Routes = [  
  { path:'', component: ProductPageComponent},
  { path:'products', component: ProductPageComponent},
  { path:'checkout', component: CheckoutPageComponent },
  { path:'result', component: ResultPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CheckoutPageComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
