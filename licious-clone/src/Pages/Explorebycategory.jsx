import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Explorebycategory() {
    return (
        <div  className="category-main">
          <Box   className="cat-category">
          <Heading id="shop-cat">Explore by category</Heading>
               <p id="freshest">Freshest meats just for you</p>
          </Box>
          <Box className="top-bar">
                   <div>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/Category/782aa584-4978-2e46-e38a-4aff56f10800/original/1603885852.4258--2020-10-2817_20_52--738.jpeg" alt="Today's Deals" />
                       <p className="top-para"> Today's Deals</p>
                   </div>
                   <Link to="/chicken">
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png" alt="Chicken" />
                       <p className="top-para">Chicken</p>
                   </Link>
                   <Box>
                   <Link to="/fish">
                       <img className="top-img extra-21" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png" alt="Fish" />
                       <p className="top-para">Fish & Seafood</p>
                   </Link>
                   </Box>
                   <Box>
                   <Link to="/mutton">
                         <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png" alt="Mutton" />
                         <p className="top-para">Mutton</p>
                     </Link>
                   </Box>
                 
                    <Box>  <Link to="/readytocook">
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png" alt="ReadytoCook" />
                       <p className="top-para">Ready to Cook</p>
                   </Link></Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png" alt="Prawns" />
                       <p className="top-para">Prawns</p>
                   </Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png" alt="Coldcut" />
                       <p className="top-para">Cold Cut</p>
                   </Box>
                   <Box>
                       <img  className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png" alt="Spreads" />
                       <p className="top-para">Spreads</p>
                   </Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png" alt="eggs" />
                       <p className="top-para">Eggs</p>
                   </Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png" alt="kebab&tandoor" />
                       <p className="top-para">Biriyani & Kebab</p>
                   </Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png" alt="bestsellers" />
                       <p className="top-para">Combos</p>
                   </Box>
                   <Box>
                       <img className="top-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png" alt="snacks" />
                       <p className="top-para">Featured Collections</p>
                   </Box>
                 </Box>
        </div>
      )
}
