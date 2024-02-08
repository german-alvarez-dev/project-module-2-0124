import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import AboutPage from './pages/AboutPage/AboutPage'
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx'
import NotfoundPage from './pages/NotFoundPage/NotfoundPage.jsx'

function App() {

  return (
    <div className="App">

      <Navbar />
      <Sidebar />

      <main>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:apartment_id" element={<DetailsPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>

      </main>


      <Footer />

    </div>
  )
}

export default App
