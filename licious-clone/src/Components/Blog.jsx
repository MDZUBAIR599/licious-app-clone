import React from 'react'

export default function Blog() {
  return (
    <div className="blog-main">
    <div className="blog-head">
        <h2 className="blog-title">Check out our blog</h2>
        <p>See all</p>
    </div>
    <div className="blog-content">
        <div className="blog-box">
            <img className="blog-img" src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_436300522.jpg" alt="" />
            <h3>Have you Ever Heard of Omega-3 Eggs? Learn About Their Benefits in This Article!</h3>
        </div>
        <div className="blog-box">
            <img className="blog-img" src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1695762436.jpg" alt="" />
            <h3>Try This Easy Recipe for Pan-Seared Mahi Mahi in a Butter-Garlic Sauce!</h3>
        </div>
        <div className="blog-box">
            <img className="blog-img" src="https://www.licious.in/blog/wp-content/uploads/2022/06/honey-garlic-chicken-wings.jpg" alt="" />
            <h3>Make Delicious, Scrumptious Licious Honey Chilli Garlic Wings at home!</h3>
        </div>
    </div>
</div>
  )
}
