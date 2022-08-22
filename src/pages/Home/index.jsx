import React from 'react'
import Carousel from '../../components/clientSide/Carousel'
import CategoriesList from '../../components/clientSide/CategoriesList'
import NewsLatter from '../../components/clientSide/NewsLatter'
import Header from '../../layouts/Header'
import Navbar from '../../layouts/Navbar'
import './home.css'




const Home = () => {
  return (
    <div className='home_page'>
      
      <div className=''>
        <Navbar/>
        {/* <Header/> */}
      </div>
      
      <div className=''>
        <Carousel/>
        <CategoriesList/>
        <NewsLatter/>
      </div>

    </div>
  )
}

export default Home