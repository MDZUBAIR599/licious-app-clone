import React from 'react'
import { Discover } from './Discover'
import Banner from './Banner'
import { Join } from './Join'
import Shopcategory from './Shopcategory'
import Bestsellers from './Bestsellers'
import Reward from './Reward'
import Blog from '../Blog'
import { Adv } from './Adv'


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
    </div>
  )
}

export default Home
