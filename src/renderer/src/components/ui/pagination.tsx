import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './button'

interface PaginationPros {
  totalCount: number
  perPage: number
  pageIndex: number
}
export function Pagination({ totalCount, perPage, pageIndex }: PaginationPros): JSX.Element {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span>Total de {totalCount} items(s)</span>
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <ChevronsLeft className="w-4 h-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>
          <Button variant="outline">
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>
          <Button variant="outline">
            <ChevronsRight className="w-4 h-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
