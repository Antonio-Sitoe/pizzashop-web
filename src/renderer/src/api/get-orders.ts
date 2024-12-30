import { api } from '@/lib/axios'

export interface OrderType {
  orderId: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

interface GetOrderResponse {
  orders: OrderType[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface getOrdersQuery {
  pageIndex?: number
}

export async function getOrders({ pageIndex = 0 }: getOrdersQuery): Promise<GetOrderResponse> {
  const { data } = await api.get('/orders', {
    params: {
      pageIndex: pageIndex ?? 0
    }
  })
  return data
}
