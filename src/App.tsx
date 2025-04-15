import { Route, Routes, useLocation } from 'react-router-dom'

// import './App.css'
import Alert from './utils/notification/alert'
import { AlertProvider } from './utils/notification/alertcontext'
import { About, BackgroundHistory, Contact, Enroll, Essay, Home, News, NewsDetail, NotFound, PrizeComponent, WinnersAndParticipants} from './pages/_route'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { useEffect, useRef } from 'react'

function App() {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null); // Create ref

  useEffect(() => {
    // Scroll the container instead of window
    containerRef.current?.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div ref={containerRef} className="flex flex-col items-center w-full overflow-auto h-screen">
      <Navbar/>
      <AlertProvider>
        <Alert />  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/amobi-essay-prize" element={<Essay/>} />
          <Route path="/news-updates/:id" element={<NewsDetail/>} />
          <Route path="/news-updates" element={<News/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/winnersAndParticipants" element={<WinnersAndParticipants/>} />
          <Route path="/enroll" element={<Enroll/>} />
          <Route path="/prize" element={<PrizeComponent/>} />
          <Route path="/background-and-history" element={<BackgroundHistory/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </AlertProvider>
      <Footer/>
    </div>
  )
}

export default App
