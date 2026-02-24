import { OrderItem } from "./order-item.model";

export interface order{

  orderId: number;
  orderStatus: string;
  serviceType: string;
  totalValue: number;
  items: OrderItem[];

}
