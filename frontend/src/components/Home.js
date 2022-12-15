import React from 'react'
import About from './About'
import Bestseller from './Catalogue'
import Footer from './Footer'
import Landing from './Landing'

function Home() {
  return (
    <div>
     <Landing />
      <About />
      <Bestseller />
      <Footer />
    </div>
  )
}

export default Home