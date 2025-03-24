import { Route, Routes } from 'react-router-dom'

// import './App.css'
import Alert from './utils/notification/alert'
import { AlertProvider } from './utils/notification/alertcontext'
import { About, Contact, Essay, Home, News, NewsDetail, NotFound, ProfessionalDetail, Professionals, ServiceDetail, Services } from './pages/_route'
import Footer from './components/footer'
import Navbar from './components/navbar'

function App() {

  return (
    <div className={`flex flex-col items-center w-full overflow-auto h-screen `}>
      <Navbar/>
      <AlertProvider>
        <Alert />  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/amobi-essay-prize" element={<Essay/>} />
          <Route path="/news-updates/:id" element={<NewsDetail/>} />
          <Route path="/news-updates" element={<News/>} />
          <Route path="/professionals" element={<Professionals/>} />
          <Route path="/professionals/:id" element={<ProfessionalDetail/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services/:id" element={<ServiceDetail/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </AlertProvider>
      <Footer/>
    </div>
  )
}

export default App
