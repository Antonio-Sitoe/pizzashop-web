import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
import { Button } from '@/components/ui/button'
import { ArrowBigRight, Search, X } from 'lucide-react'

export function Orders(): JSX.Element {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <form action="" className="flex items-center gap-2">
            <Label className="text-sm font-semibold" htmlFor="filter">
              Filtros
            </Label>
            <Input placeholder="Nome do cliente" className="h-8 w-80" id="filter" />
          </form>
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
                <TableRow>
                  <TableCell className="font-medium">
                    <Button variant="outline" size="xs">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
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
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
