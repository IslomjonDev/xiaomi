import React from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'
import Explore from '../../components/explore/Explore'
import Support from '../../components/support/Support'

const Home:React.FC = () => {
  return (
    <>
         <Banner/>
         <Products/>
         <Explore/>
         <Support/>
    </>
  )
}

export default Home