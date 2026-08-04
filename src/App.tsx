import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { HomePage } from './pages/HomePage'
import { ServicesIndexPage } from './pages/ServicesIndexPage'
import { ServicePage } from './pages/ServicePage'
import { SERVICES } from './config/services'
import { NotFoundPage } from './pages/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesIndexPage />} />
        {SERVICES.map((service) => (
          <Route
            key={service.slug}
            path={service.slug}
            element={<ServicePage service={service} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return <AppRoutes />
}
