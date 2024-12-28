import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export function OrderDetails({ children }): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Pedido: djsdshfjkhdj</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">Status</TableCell>
                  <TableCell className="flex justify-end">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="font-medium text-muted-foreground">Pendente</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Cliente</TableCell>
                  <TableCell className="flex justify-end">Antonio Sitoe</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Telefone</TableCell>
                  <TableCell className="flex justify-end">258 878984953</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Email</TableCell>
                  <TableCell className="flex justify-end">258 878984953</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Realizado a:</TableCell>
                  <TableCell className="flex justify-end">ha 3 minutos</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="text-right">Qtd.</TableHead>
                  <TableHead className="text-right">Preco</TableHead>
                  <TableHead className="text-right">SubTotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pizza pepeorne familia</TableCell>
                  <TableCell className="text-right">2</TableCell>
                  <TableCell className="text-right">700</TableCell>
                  <TableCell className="text-right">2000</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total do pedido</TableCell>
                  <TableCell className="text-right font-medium">259</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
