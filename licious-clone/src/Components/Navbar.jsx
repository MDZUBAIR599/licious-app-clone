
import {AiOutlineSearch,} from "react-icons/ai"
import { ChevronDownIcon} from '@chakra-ui/icons'
import {VscClose} from "react-icons/vsc"
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
    DrawerHeader,
    DrawerFooter,
    } from "@chakra-ui/react"
import Header from "./Header"
import { CartContext } from "../context/Cartcontext"


function Navbar() {
  const { isOpen:isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure()
  const { isOpen:isCartOpen, onOpen:onCartOpen, onClose:onCartClose } = useDisclosure()
  const btnRef = useRef()
  const {cart,setCart} =useContext(CartContext)
  const [count,setCount] = useState(1)
  const [log,setLog] = useState("")
  const [dis,setDis] = useState(false)
  const [otp,setOtp] = useState("")
  const [con,setCon] = useState("")
  const toast = useToast()
  const navigate = useNavigate();
  const handleCount=()=>{
      if(count<=1){
          return
      }
      setCount(count-1)
  }
  const ref=useRef()
  let subtotal=0;
  for(let i=0;i<cart.length;i++){
      subtotal+=cart[i].price;
  }
  const onLoginChange=()=>{
      setLog(ref.current.value)
  }  
   
  const sendOTP=()=>{
  var x=Math.floor(Math.random()*10000)+90000
      setOtp(x)
      alert(x)
      setDis(true)
  }
  const handleOtp=()=>{
      console.log(otp,con)
      if(otp===Number(con)){
          toast({
              title: 'Account created.',
              description: "You have successfully logged in",
              status: 'success',
              duration: 6000,
              isClosable: true,
            })
            onLoginClose()
      }
      else{
          toast({
              title: 'Invalid',
              description: "Otp is incorrect.",
              status: 'error',
              duration: 6000,
              isClosable: true,
            })
            toast({
              title: 'Enter correct otp',
              description: `Otp is ${otp}`,
              status: 'info',
              duration: 6000,
              isClosable: true,
            })  

      }
      
  }
  const logOut = () => {
      setDis(false);
      setLog("")
      setOtp("")
      setCon("")
      toast({
          title: 'Logged out.',
          description: "You have successfully logged out of your account",
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
  }
  const handleCheckOut=()=>{
      if(cart.length===0){
          toast({
              title: 'Cart Empty.',
              description: "Please add a product to proceed",
              status: 'error',
              duration: 6000,
              isClosable: true,
            })
      }
      else if(!dis){
          onCartClose();
          onLoginOpen();
      }
      else{
          onCartClose();
          
      }
  }
  const handleRemove=(id)=>{
      let update=cart.filter((item)=>item.id!==id)
     setCart(update)
  }

  
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
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
               
              <div>
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
              
            </div>
            <div className="nav-log" ref={btnRef} colorscheme='teal' onClick={onLoginOpen}>
                    <img className="nav-icons profile" src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="profile" />
                    {!dis?<p className="nav-nav">Login</p>:<p onClick={()=>logOut()} className="nav-nav">Profile</p>}
        <Drawer
        isOpen={isLoginOpen}
        placement='right'
        onClose={onLoginClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  color={"red"} marginLeft="600px"  />
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
        <div className="nav-cart" onClick={onCartOpen}>
            <img className="nav-icons" src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart" />
            <p className="nav-nav">Cart</p>
            <div > <p className="nav-nav">{" "}:{" "}{cart.length}</p></div>
          <div width={"100px"}>
          
              
                          <Drawer
                                  isOpen={isCartOpen}
                                  placement='right'
                                  onClose={onCartClose}
                                  finalFocusRef={btnRef}
                                >
                                  <DrawerOverlay className="cartdrawer" />
                                  <DrawerContent >
                                    <DrawerCloseButton bg={"red"}  width="100px" />
                                    <DrawerHeader>Order Summary</DrawerHeader>

                                    <DrawerBody >
                                    <WrapItem>
                              <Center w='400px' h='30px' bg='green.600' color='white'>
                              Free delivery on all orders above ₹399
                              </Center>
                            </WrapItem >
                            {cart.map((item,index)=>{
                                          console.log(item.item)
                                          return(
                                      <Stack className='cart-item'  key={item.id}>
                                          <Box className='cart-box' >
                                              <Box className='cart-boxx1'>
                                            <p className='cart-p1'>{index+1}</p>
                                            <p className="cart-p2">{item.item}</p>  
                                              </Box>
                                              <VscClose onClick={()=>handleRemove(item.id)}></VscClose>
                                          </Box>
                                          <Box className='cart-box2'>
                                              <Box className='cart-box11'>
                                            <p className='cart-p3'>{item.weight}gms</p>
                                            <p className="cart-p4">₹{item.price}.00</p>
                                            </Box>
                                              <Box className='cart-box3'>
                                            <Button onClick={()=>handleCount()}>-</Button>
                                            <p className="cart-p5">{count}</p>
                                            <Button onClick={()=>setCount(count+1)}>+</Button>
                                              </Box>
                                          </Box>
                                      </Stack>
                                          )

                                      })}
                                        <p className="cart-para">Stop paying delivery charges. Join Meatopia today!</p>
                                          <Box className="join-join">
                                              <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" alt="" />
                                              <p className="join-now">JOIN NOW {">"}</p>
                                          </Box>
                                          <Box className="bill-main">
                                              <h1 className="bill-total">BILL DETAILS</h1>
                                              <Box className="bill-flex">
                                                  <p>Subtotal</p>
                                                  <p>{subtotal}</p>
                                              </Box>
                                              <Box className="bill-flex">
                                                  <p>Delivery Charge</p>
                                                  <p>0</p>
                                              </Box>
                                              <Box className="bill-flex">
                                                  <p>Discount</p>
                                                  <p>0</p>
                                              </Box>
                                              <hr />
                                              <Box className="bill-flex bill-total">
                                                  <h3>Total</h3>
                                                  <h3>₹{subtotal}</h3>
                                              </Box>
                                          </Box>
                                    </DrawerBody>

                                    <DrawerFooter>
                                      <Box className="bill-last">
                                      <b className="bill-b">Total: ₹{subtotal} </b> 
                                      <Button colorScheme="red" mr={3} onClick={handleCheckOut}>
                                        Proceed to Checkout
                                      </Button>
                                      </Box>
                                      
                                    </DrawerFooter>
                                  </DrawerContent>
                                </Drawer>  
          </div>                          
           </div>
           </div>
           </div>
      </div>
    </div>
    
  )
}

export default Navbar