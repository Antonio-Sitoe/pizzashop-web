import { ptBR } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cancelOrder } from '@/api/cancel-order'
import { OrderStatus } from '@/components/order-status'
import { deliverOrder } from '@/api/deliver-order'
import { approveOrder } from '@/api/approve-order'
import { OrderDetails } from './order-details'
import { dispatchOrder } from '@/api/dispatch-order'
import { formatDistanceToNow } from 'date-fns'
import { TableCell, TableRow } from '@/components/ui/table'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ArrowBigRight, Search, X } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GetOrderResponse, ORDER_STATUS, OrderType } from '@/api/get-orders'

interface OrderTableRowProps {
  order: OrderType
}

export function OrderTableRow({ order }: OrderTableRowProps): JSX.Element {
  const [buttonLabel, setButtonLabel] = useState('Aprovar')
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { mutateAsync: cancelOrderAsync, isPending: isCancelingOrder } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'canceled')
    }
  })

  const { mutateAsync: aproveOrderFn, isPending: isAprovingOrder } = useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'processing')
    }
  })

  const { mutateAsync: deliveryOrderFn, isPending: isDeliveringOrder } = useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'delivering')
    }
  })
  const { mutateAsync: dispatchOrderFn, isPending: isdispatchOrder } = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'delivered')
    }
  })

  async function updateOrderStatusOnCache(orderId: string, status: ORDER_STATUS): Promise<void> {
    const orderListCache = queryClient.getQueriesData<GetOrderResponse>({
      queryKey: ['orders']
    })
    orderListCache.forEach(([cachekey, cacheData]) => {
      if (!cacheData) return
      queryClient.setQueryData<GetOrderResponse>(cachekey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }
          return order
        })
      })
    })
  }

  function handleCancelOrder(): void {
    cancelOrderAsync({ orderId: order.orderId })
  }

  async function handleActionType(status: ORDER_STATUS, orderId: string): Promise<void> {
    if (status === 'pending') {
      await aproveOrderFn({ orderId })
      setButtonLabel('Em Entrega')
    } else if (status === 'processing') {
      await dispatchOrderFn({ orderId })
      setButtonLabel('Entregue')
    } else if (status === 'delivering') {
      await deliveryOrderFn({ orderId })
      setButtonLabel('')
    }
  }

  const isPending = isdispatchOrder || isDeliveringOrder || isAprovingOrder || isCancelingOrder

  return (
    <>
      <TableRow>
        <TableCell className="font-medium">
          <Dialog onOpenChange={setIsModalOpen} open={isModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>
            <OrderDetails id={order.orderId} isOpen={isModalOpen} />
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
        <TableCell className="text-muted-foreground">
          {formatDistanceToNow(order.createdAt, {
            locale: ptBR,
            addSuffix: true
          })}
        </TableCell>
        <TableCell>
          <OrderStatus status={order.status} />
        </TableCell>
        <TableCell className="font-medium">{order.customerName}</TableCell>
        <TableCell className="font-medium">
          {order.total.toLocaleString('pt-MZ', {
            style: 'currency',
            currency: 'MZN'
          })}{' '}
        </TableCell>
        <TableCell>
          {buttonLabel && (
            <Button
              size="xs"
              variant="outline"
              onClick={() => handleActionType(order.status, order.orderId)}
              disabled={isPending}
            >
              <ArrowBigRight className="h-3 w-3 mr-2" />
              {buttonLabel}
            </Button>
          )}
        </TableCell>
        <TableCell>
          <Button
            disabled={
              (order.status !== 'pending' && order.status !== 'processing') || isCancelingOrder
            }
            onClick={handleCancelOrder}
            size="xs"
            variant="ghost"
          >
            <X className="h-3 w-3 mr-2" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
