import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() newProduct: any = {}
  private modalSubscription!: Subscription
  constructor(private modalService: ModalService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.modalSubscription = this.modalService.modalResponse.subscribe(async (response) => {
      switch (response) {
        case 'ok':
          !!this.newProduct.id ? await this.productService.editProduct(this.newProduct) : await this.productService.createProduct(this.newProduct)
          // this.router.navigate([this.router.url])
          window.location.reload()
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
