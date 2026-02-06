import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { CartComponent } from "../cart/cart.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-new-order',
  imports: [HeaderComponent, ProductFilterComponent, ProductCardComponent, CartComponent],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent {

}
