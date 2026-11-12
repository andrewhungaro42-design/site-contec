import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import ProjetosFuturos from './pages/ProjetosFuturos'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Registro from './pages/Registro'

export default function App() {
  return (
    <AuthProvider>
      <Router>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}
