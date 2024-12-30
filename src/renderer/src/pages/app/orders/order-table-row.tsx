import { TableCell, TableRow } from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { ArrowBigRight, Search, X } from 'lucide-react'
import { OrderDetails } from './order-details'
import { OrderType } from '@/api/get-orders'
import { OrderStatus } from '@/components/order-status'
import { formatDistanceToNow } from 'date-fns'

interface OrderTableRowProps {
  order: OrderType
}

export function OrderTableRow({ order }: OrderTableRowProps): JSX.Element {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">
          <OrderDetails>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </OrderDetails>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
        <TableCell className="text-muted-foreground">
          {formatDistanceToNow(order.createdAt, {
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
          <Button size="xs" variant="outline">
            <ArrowBigRight className="h-3 w-3 mr-2" />
            Aprovar
          </Button>
        </TableCell>
        <TableCell>
          <Button className="" size="xs" variant="ghost">
            <X className="h-3 w-3 mr-2" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
