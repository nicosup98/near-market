import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() walletId!: string
  @Output() selectedProduct = new EventEmitter<Product>()
  faClose = faClose
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  buyProduct(){
    this.productService.buyProduct(this.product)
  }
  async deleteProduct(){
    await this.productService.deleteProduct(this.product)
    // this.router.navigate([this.router.url])
    window.location.reload()
  }

  editProduct(){
    this.selectedProduct.emit(this.product)
  }

}
