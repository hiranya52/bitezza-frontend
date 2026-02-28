import { CartService } from './../../service/carts/cart.service';
import { cartProduct } from './../../../model/CartProduct.model';
import { ProductService } from './../../service/products/product.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  private ProductService = inject(ProductService);
  private CartService = inject(CartService);

  @Input() product: any

  addToCart( productName: string ){

    this.ProductService.getProduct(productName).subscribe((response:any) => {
      console.log(response);

      const product: cartProduct = {

        productId: response.id,
        name: response.name,
        imageURL: response.imageUrl,
        price: response.price,
        qty: 1

      }

      this.CartService.addToCart(product);

    })

  }



}
