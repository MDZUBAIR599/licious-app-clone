
import { Box, extendTheme, Flex, Image, Spacer} from '@chakra-ui/react'

import {AiFillApple} from "react-icons/ai"
import {BiCategory} from "react-icons/bi"
import {IoIosArrowDown} from "react-icons/io"
import {BsDot} from "react-icons/bs"
import React from 'react'
import '../module.css';
function Header() {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  let theme = extendTheme({ breakpoints })
  return (
    <div>
      <Flex className="navbar-0">
      <div>
               
                </div>
                <BiCategory></BiCategory>
                <Box className="navbar-1">
                    <p className="nav-p" spacing="0.25rem">Why Licious? </p>
                    
                    <BsDot className="nav-i-color" color='gray'></BsDot>
                    <p className="nav-p" spacing="0.25rem">Download App</p>
                    <AiFillApple className="nav-i" spacing="0.25rem"></AiFillApple>
                    <Spacer/>
                    
                     <img className="nav-img" src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="playstore" /> 
                     <img className="nav-img" 
                     src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="Category"/>
                </Box>
                <Box className="navbar-2">
                  <Box>  <p className="nav-p">FSSC 22000 Certifications</p>
                  </Box>
                  <Spacer/>
                    <BsDot className="nav-i-color"></BsDot>
                    <Spacer/>
                    <p className="nav-p">About Us</p>
                    <BsDot className="nav-i-color"></BsDot>
                    <p className="nav-p">Careers@Licious</p>
                    <BsDot className="nav-i-color"></BsDot>
                    <p className="nav-p">Contact us</p>
                    <IoIosArrowDown className="nav-i"></IoIosArrowDown>
                </Box>
           
        </Flex>
    </div>
  )
}

export default Header
