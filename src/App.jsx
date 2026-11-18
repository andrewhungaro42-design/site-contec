import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import ProjetosFuturos from './pages/ProjetosFuturos'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Registro from './pages/Registro'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToDonation) return

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.state])

  return null
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/projetos" element={<ProjetosFuturos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}
