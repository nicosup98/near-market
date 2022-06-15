import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  newProduct: any = {}
  private modalSubscription!: Subscription
  constructor(private modalService: ModalService, private productService: ProductService) { }

  ngOnInit(): void {
    this.modalSubscription=this.modalService.modalResponse.subscribe((response)=>{
      switch(response){
        case 'ok':
          this.productService.createProduct(this.newProduct)
          break;
        case 'close':
          this.newProduct = {} as Product
          break;
          
      }
    })
  }

  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe()
  }

}
