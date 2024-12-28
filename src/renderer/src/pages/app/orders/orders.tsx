import { Helmet } from 'react-helmet-async'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilters } from './order-table-filters'
import { Pagination } from '@/components/ui/pagination'

export function Orders(): JSX.Element {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="border rounded-md mt-4">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado ha</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Clientes</TableHead>
                  <TableHead className="w-[140px]">Total pedidos</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <OrderTableRow />
              </TableBody>
            </Table>
          </div>
          <Pagination perPage={10} totalCount={10} pageIndex={0} />
        </div>
      </div>
    </>
  )
}
