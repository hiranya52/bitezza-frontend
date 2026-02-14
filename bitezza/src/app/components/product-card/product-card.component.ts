import { ProductService } from './../../service/products/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  private ProductService = inject(ProductService);

  @Input() product: any

  addToCart( productName: string ){

    this.ProductService.getProduct(productName).subscribe((response:any) => {

      console.log(response);

    })

  }



}
