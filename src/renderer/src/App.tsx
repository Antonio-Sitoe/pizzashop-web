import { RoutesProvider } from './routes'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App(): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesProvider />
        <Toaster richColors />
      </QueryClientProvider>
    </>
  )
}
