
import {AiOutlineSearch,} from "react-icons/ai"

import { ChevronDownIcon} from '@chakra-ui/icons'

import {useContext,useRef,useState} from "react"
import { useNavigate } from "react-router-dom"
import "../module.css"
import {Link} from "react-router-dom"
import {useToast,Input,
    Box,WrapItem,Center,Stack,
    Drawer,useDisclosure,DrawerContent,
    DrawerCloseButton,DrawerBody,DrawerOverlay,
    Button,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from "@chakra-ui/react"
// import { CartContext } from "../context/cartcontext"
import Header from "./Header"
function Navbar() {
  const { isOpen:isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure()
  const { isOpen:isCartOpen, onOpen:onCartOpen, onClose:onCartClose } = useDisclosure()
  const btnRef = useRef()
  // const {cart,setCart} =useContext(CartContext)
  const [count,setCount] = useState(1)
  const [log,setLog] = useState("")
  const [dis,setDis] = useState(false)
  const [otp,setOtp] = useState("")
  const [con,setCon] = useState("")
  const toast = useToast()
  const navigate = useNavigate();
  // console.log(cart)
  const handleCount=()=>{
     
  }
  const ref=useRef()
 
  const onLoginChange=()=>{
      setLog(ref.current.value)
  }  
   
  const sendOTP=()=>{
 
  }
  const handleOtp=()=>{
    
      
  }
  const logOut = () => {
     
  }

  
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <Box>
      <div className="main-cont">
           <div className="container">
           <Link to="/"><img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="li-icon" /></Link>
                <div className="nav-loc">
                <img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="location" />
                <select className="nav-select">
                    <option value="bangalore">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Agra">Agra</option>
                    <option value="Hyderabad">Banglore</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select>
                </div>
                <div>
                <AiOutlineSearch className="search-icon"></AiOutlineSearch>
                <input className="nav-inp" type="text" placeholder="Search for any delicious product" />
            
                       
            
                </div>
               
               
               <Menu    >
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <div  className="nav-categories">
                  <img  className="nav-cat-icon"
                     src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="Categories"/>
                     <p className="nav-p">Categories</p>
                </div>              
              </MenuButton>
              <MenuList className="dropdown" alignItems={"center"} bg="whitesmoke" width={"300px"} box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <MenuItem className="cat-img"> 
                <div  className="cat-img">
                <Link to="/mutton">
                      <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png" alt="Mutton" />
                     
                  </Link>
                </div>
                Mutton</MenuItem>
                <MenuItem>
                <Link to="/readytocook">
                    <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png" alt="ReadytoCook" />
                </Link>
                Ready to Cook</MenuItem>
                <MenuItem>
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png" alt="Prawns" />
                Prawns</MenuItem>
                <MenuItem>
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png" alt="Coldcut" />Cold Cuts</MenuItem>
                <MenuItem>
                <img  className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png" alt="Spreads" />Spreds</MenuItem>
                <MenuItem>
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png" alt="eggs" />Eggs</MenuItem>
                <MenuItem>
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8f6c3a69-7867-05d5-9367-ed091bdf3c61/original/hyd-chicken.png" alt="kebab&tandoor" />Biryani&Kebab</MenuItem>
                <MenuItem>
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b8169e6d-59ae-ba6f-f839-ec0883a9742e/original/Combo2.png" alt="bestsellers" /> Combos</MenuItem>
                <MenuItem> 
                <img className="cat-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/804e2c47-aa87-e548-8d19-789b1fccb8bb/original/GFD.png" alt="snacks" />
                Featured Collections</MenuItem>
              </MenuList>
            </Menu>
              

                <div className="nav-log" ref={btnRef} colorscheme='teal' onClick={onLoginOpen}>
                    <img className="nav-icons profile" src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="profile" />
                    {!dis?<p className="nav-nav">Login</p>:<p onClick={()=>logOut()} 
                    className="nav-nav">Logout</p>}
       <Drawer
        isOpen={isLoginOpen}
        placement='right'
        onClose={onLoginClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="login-body">
          <DrawerBody className="login-body2">  
            <Input placeholder="Enter Mobile Number" ref={ref} type="number" className="login-mob" onChange={onLoginChange}></Input>
            {dis?<Input placeholder="Enter Otp" type="number" onChange={(e)=>setCon(e.target.value)}></Input>:null}
         {dis?<Button className="login-confirm" colorScheme="Red" onClick={() =>handleOtp()}>Confirm OTP</Button>:<Button disabled={log.length<10} colorScheme="Red" className="login-otpget" onClick={()=>sendOTP()}>Proceed Via OTP</Button>}
            <p className="login-pp">By signing in you agree to our <b className="bold">terms and conditions</b></p>
          </DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          </div>
           <div className="nav-cart">
                    <img className="nav-icons" src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart" />
                    <p className="nav-nav">Cart</p>                  
           </div>
           </div>
           </div>
      </Box>
    </div>
    
  )
}

export default Navbar