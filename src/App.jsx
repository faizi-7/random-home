import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import ProfileStrip from './components/ProfileStrip/ProfileStrip'

const App = () => {
  return (
    <div className="home">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App