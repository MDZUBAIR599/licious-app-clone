import React from 'react'
import { Discover } from './Discover'
import Banner from './Banner'
import { Join } from './Join'
import Shopcategory from './Shopcategory'


function Home() {
  return (
    <div>
      <Banner/>
      <Shopcategory/>
      <Join/>
      <Discover/>
    </div>
  )
}

export default Home
