import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Overview from './Components/Overview'
import Author from './Components/Author'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <div className='m-6'>
        <Navbar/>
        <Body/>
        <Overview/>
        <Author/>
        <Footer/>
      </div>
    </>
  )
}

export default App
