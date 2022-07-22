import React from 'react'
import { Discover } from './Discover'
import Banner from './Banner'
import { Join } from './Join'
import Shopcategory from './Shopcategory'
import Bestsellers from './Bestsellers'
import Reward from './Reward'
import Blog from '../Blog'
import { Adv } from './Adv'
import { News } from './News'


function Home() {
  return (
    <div>
      <Banner/>
      <Shopcategory/>
      <Join/>
      <Discover/>
      <Reward/>
      <Bestsellers/>
      <Blog/>
      <Adv/>
      <News/>
    </div>
  )
}

export default Home
