import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { formatNearAmount } from 'near-api-js/lib/utils/format';
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
  productToEdit: Product = {} as Product

  ngOnInit(): void{
    this.products = this.productService.getProducts()
    console.log('products'); 
    
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

  editProduct(product:Product){
    console.log({product});
    
    this.productToEdit = {...product,price:formatNearAmount(product.price,2)}
    this.openModal()
  }

}
