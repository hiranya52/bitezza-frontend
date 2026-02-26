import { environment } from "../../environments/environment.prod"

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  product: {
    getAll: `${BASE_URL}/product/getAll`,
    getProduct: `${BASE_URL}/product/getProduct?name=`
  },

  order: {
    add: `${BASE_URL}/order/add`,
    getLastOrderId: `${BASE_URL}/order/lastId`,
    getAll: `${BASE_URL}/order/getAll`,
    updateOrderStatus: `${BASE_URL}/order/nextStatus/`

  }

}
