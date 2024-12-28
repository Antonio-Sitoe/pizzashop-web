import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount(): Promise<GetMonthCanceledOrdersAmountResponse> {
  const response = await api.get<GetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount'
  )
  return {
    amount: 5,
    diffFromLastMonth: 6
  }
}
