
import {AiOutlineSearch} from "react-icons/ai"
import {VscClose} from "react-icons/vsc"

import {useContext,useRef,useState} from "react"
import { useNavigate } from "react-router-dom"
import "../module.css"
import {Link} from "react-router-dom"
import {useToast,Input,
    Box,WrapItem,Center,Stack,
    Drawer,useDisclosure,DrawerContent,
    DrawerCloseButton,DrawerBody,DrawerOverlay,
    DrawerHeader,Button,DrawerFooter} from "@chakra-ui/react"
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
      if(count<=1){
          return
      }
      setCount(count-1)
  }
  const ref=useRef()
  let subtotal=0;
  // for(let i=0;i<cart.length;i++){
  //     subtotal+=cart[i].price;
  // }
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
      // if(cart.length===0){
      //     toast({
      //         title: 'Cart Empty.',
      //         description: "Please add a product to proceed",
      //         status: 'error',
      //         duration: 6000,
      //         isClosable: true,
      //       })
      // }
      // else if(!dis){
      //     onCartClose();
      //     onLoginOpen();
      // }
      // else{
      //     onCartClose();
      //     navigate("/checkout")
      // }
  }
  const handleRemove=(id)=>{
    //   let update=cart.filter((item)=>item._id!==id)
    //  setCart(update)
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
                    <option value="bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Agra">Agra</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select>
                </div>
                <div>
                <AiOutlineSearch className="search-icon"></AiOutlineSearch>
                       <input className="nav-inp" type="text" placeholder="Search for any delicious product" />
            
                </div>
                
                <div className="nav-log" ref={btnRef} colorscheme='teal' onClick={onLoginOpen}>
                    <img className="nav-icons profile" src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="profile" />
                    {!dis?<p className="nav-nav">Login</p>:<p onClick={()=>logOut()} className="nav-nav">Logout</p>}
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
           </div>
           </div>
      </Box>
    </div>
    
  )
}

export default Navbar