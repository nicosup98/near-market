import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() walletId!: string
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  buyProduct(){
    this.productService.buyProduct(this.product)
  }

}
