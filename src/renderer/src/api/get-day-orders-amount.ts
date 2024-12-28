import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount(): Promise<GetDayOrdersAmountResponse> {
  const response = await api.get<GetDayOrdersAmountResponse>('/metrics/day-orders-amount')

  return {
    amount: 5,
    diffFromYesterday: 6
  }
}