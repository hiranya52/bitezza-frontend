import { ProductService } from './../../service/products/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-new-order',
  imports: [HeaderComponent, ProductFilterComponent, ProductCardComponent, CartComponent],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent implements OnInit{

  private ProductsService = inject(ProductService);

   ProductList: any[] = [];

  ngOnInit(): void {
    console.log("Products page loads!!");

    this.ProductsService.getAllProducts().subscribe((response:any) => {
      console.log(response);
      this.ProductList = response;

    });

  }
}
