import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export function OrderTableFilters(): JSX.Element {
  return (
    <div>
      <form action="" className="flex items-center gap-2">
        <Label className="text-sm font-semibold" htmlFor="filter">
          Filtros
        </Label>
        <Input placeholder="ID do pedido" className="h-8 w-auto" id="filter" />
        <Input placeholder="Nome do cliente" className="h-8 w-80" id="filter" />

        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] h-8">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="processing">Em preparo</SelectItem>
            <SelectItem value="delivering">Em Entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" variant="secondary">
          <Search className="h-3 w-3" />
          Filtrar resultados
        </Button>
        <Button type="submit" variant="outline">
          <X className="h-3 w-3" />
          Remover Filtrar
        </Button>
      </form>
    </div>
  )
}
