
import { Box, extendTheme, Flex, Image, Spacer} from '@chakra-ui/react'

import {AiFillApple} from "react-icons/ai"
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
      <Flex className="header-0">
      <div>
                </div>
                <Box className="header-1">
                    <p className="header-p" spacing="0.25rem">Why Licious? </p>
                    
                    <BsDot className="nav-i-color" color='gray'></BsDot>
                    <p className="header-p" spacing="0.25rem">Download App</p>
                    <AiFillApple className="nav-i" spacing="0.25rem"></AiFillApple>
                    <Spacer/>
                    
                     <img className="nav-img" src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="playstore" /> 
                   
                </Box>
                <Box className="header-2">
                  <Box>  <p className="header-p">FSSC 22000 Certifications</p>
                  </Box>
                  <Spacer/>
                    <BsDot className="nav-i-color"></BsDot>
                    <Spacer/>
                    <p className="header-p">About Us</p>
                    <BsDot className="nav-i-color"></BsDot>
                    <p className="header-p">Careers@Licious</p>
                    <BsDot className="nav-i-color"></BsDot>
                    <p className="header-p">Contact us</p>
                    <IoIosArrowDown className="nav-i"></IoIosArrowDown>
                </Box>
        </Flex>
    </div>
  )
}

export default Header
