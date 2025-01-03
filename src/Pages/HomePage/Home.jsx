import React from 'react'
import './Home.css'
import Navbar from '../../Components/Shared/Navbar'
import Hero from '../../Components/Home/Hero'
import TrendingGames from '../../Components/Home/TrendingGames'
import Industry from '../../Components/Home/Industry'


function App() {


  return (
    <div>
        <Navbar/>
        <Hero/>
        <TrendingGames/>
        <Industry/>

      
    </div>
  )
}

export default App
