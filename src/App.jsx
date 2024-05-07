import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './pages/HeroSection/HeroSection'
import Career from './pages/Career/Career'
import Footer from './components/Footer'
import Blog from './pages/Blog/Blog'
import PopularSearch from './pages/PopularSearch/PopularSearch'
import DownloadApp from './pages/DownloadApp/DownloadApp'
import Locations from './pages/Locations/Locations'
import Contact from './pages/Contact/Contact'
import Category from './pages/Category/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Career/>
      <Locations/>
      <Category/>
      <DownloadApp/>
      <PopularSearch/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
