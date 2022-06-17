import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NearService } from './services/near.service';
import { WINDOW_PROVIDERS } from './services/window.provider';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductCardComponent } from './layout/product-card/product-card.component';
import { FormatNearPipe } from './pipes/format-near.pipe';
import { ModalComponent } from './layout/modal/modal.component';
import { CreateProductComponent } from './layout/create-product/create-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    NavbarComponent,
    ProductCardComponent,
    FormatNearPipe,
    ModalComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [{provide: WINDOW_PROVIDERS, useValue: window},NearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
