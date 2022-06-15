import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../layout/modal/modal.service';
import { ModalConfiguration } from '../Models/ModalConfigartion';
import { Product } from '../Models/Product';
import { NearService } from '../services/near.service';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Promise<Product[]>
  constructor(private productService: ProductService, private modalService: ModalService, private nearService: NearService) {}
  walletId$ = this.nearService.getAccountId()

  ngOnInit(): void{
    this.products = this.productService.getProducts()
    console.table(this.products)
  }

  openModal(){
    this.modalService.setModalConfiguration({
      id: 'createProductModal',
      isCentered: true,
      isStatic: true,
      size: 'large',
      title: 'Create Product',
      disableOk: false
    })
  }

  log(p: Product){
    console.log({p})
  }

}
