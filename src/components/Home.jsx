import React from 'react'
import NavScrollExample from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Shop from '../components/Pages'
import DetailPage from '../Pages/DetailPage'
import Review from '../Pages/Review'

const Home = () => {
  return (
      <div>  
          <Hero />
          <Shop />
          <DetailPage />
          <Review />
    </div>
  )
}

export default Home