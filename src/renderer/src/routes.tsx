import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
// import { NotFound } from './pages/404'
// import { Dashboard } from './pages/app/dashboard'
// import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/404'
// import { NotFound } from './pages/404'

export function RoutesProvider(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        {/* <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
