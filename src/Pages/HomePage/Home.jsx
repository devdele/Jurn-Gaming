import React from 'react'
import './Home.css'
import Navbar from '../../Components/Shared/Navbar'
import Hero from '../../Components/Home/Hero'
import TrendingGames from '../../Components/Home/TrendingGames'


function App() {


  return (
    <div>
        <Navbar/>
        <Hero/>
        <TrendingGames/>
      
    </div>
  )
}

export default App
