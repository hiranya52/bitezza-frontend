import { OrderItem } from "./order-item.model";

export interface order{

  orderId: number;
  orderStatus: string;
  totalValue: number;
  items: OrderItem[];

}
