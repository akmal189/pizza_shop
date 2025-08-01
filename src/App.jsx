import Header from './components/Header/Header'
import Home from './pages/Home'
import NotFound from './pages/404'
import Cart from './pages/Cart'
import './App.css'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="site-wrapper max-w-[1400px] my-12 mx-auto bg-white rounded-2xl">
      <Header />
      <main className="p-5 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

