import { TableCell, TableRow } from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { ArrowBigRight, Search, X } from 'lucide-react'
import { OrderDetails } from './order-details'

interface OrderTableRowProps { }

export function OrderTableRow({ }: OrderTableRowProps): JSX.Element {
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
        <TableCell className="font-mono text-xs font-medium">sdsdsd</TableCell>
        <TableCell className="text-muted-foreground">ha 35 minutos</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell className="font-medium">Antonio SItoe</TableCell>
        <TableCell className="font-medium">323 MT</TableCell>
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
