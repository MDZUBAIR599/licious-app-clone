import React from 'react'
import Banner from './Banner'
import Reward from './Reward'
import Shopcategory from '../Pages/Shopcategory'
import { Join } from '../Pages/Join'
import { Discover } from '../Pages/Discover'
import { News } from '../Pages/News'
import { Adv } from '../Pages/Advetise'
import Blog from '../Pages/Blog'
import Bestsellers from '../Pages/Bestsellers'
import Explorebycategory from '../Pages/Explorebycategory'
import Rewardimage from './Rewardimage'

function Home() {
  return (
    <div>
      <Banner/>
      <Shopcategory/>
      <Join/>
      <Discover/>
      <Reward/>
      <Bestsellers/>
      <Rewardimage/>
      <Explorebycategory/>
      <Blog/>
      <Adv/>
      <News/>
     
    </div>
  )
}

export default Home;