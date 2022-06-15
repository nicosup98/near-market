import { Injectable } from '@angular/core';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { v4 as uuid4 } from 'uuid'
import { Product } from '../Models/Product';
import { NearService } from './near.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private readonly GAS = 100000000000000
  constructor(private nearService : NearService) { }

  createProduct(product: Product){
    if(product.name == null && product.image == null && product.price == null){
      alert(`missing properties`)
      return
    }
    product.id = uuid4()
    product.price = parseNearAmount(product.price + '') ?? ''
    this.nearService.contract.setProducts({product})
  }

  getProducts(): Promise<Product[]>{
    return this.nearService.contract.getProducts()
  }

  buyProduct({id, price}: Product){
    this.nearService.contract.buyProduct({id},this.GAS, price)
  }
}
