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

  private validateProduct(product: Product){
    if(product.name == null || product.image == null || product.price == null){
      alert(`missing properties`)
      return false
    }
    return true
  }

  async createProduct(product: Product){
    if(this.validateProduct(product)){
      product.id = uuid4()
      product.price = parseNearAmount(product.price + '') ?? ''
      await this.nearService.contract.setProduct({product})
    }
  }

  async getProducts(): Promise<Product[]>{
    return await this.nearService.contract.getProducts()
  }

  buyProduct({id, price}: Product){
    this.nearService.contract.buyProduct({id},this.GAS, price)
  }
  async deleteProduct(product: Product){
    await this.nearService.contract.deleteProduct({product})
  }
  async editProduct(product: Product){
    if(this.validateProduct(product)){
      product.price = parseNearAmount(product.price + '') ?? ''
      await this.nearService.contract.editProduct({newProduct: product})
    }
  }
}
