import React from 'react'
import {useState,useEffect} from "react"
import {useNavigate,useLocation} from 'react-router-dom'
import axios from "axios"

import {useContext} from "react"
import "../module.css"
import {IoMdArrowDropright} from "react-icons/io"
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink} from "@chakra-ui/react"
import { CartContext } from '../context/Cartcontext'

function Fish() {
  const navigate=useNavigate()
  const [isLoading,setloading]=useState(true)
  const [data,setData] = useState([])
  const {cart,setCart}  = useContext(CartContext)
  const {pathname}=useLocation()
  useEffect(()=>{
      axios.get("http://localhost:9000/fish")
      .then((response)=>{
        setloading(false)
        setData(response.data)
      })
      .catch((error)=>{
          console.log(error);
      })
  },[])
  const  handleClick=(id)=>{
      navigate(`/fish/${id}`)
  }
  const addToCart=(id)=>{
      let exist=cart.filter((item)=>item._id===id)
      if(exist.length!==0){
          alert("Item is already in cart")
      }else{
      const add=data.find((item)=>item._id===id)
      setCart([...cart,add])
      }
  }

return isLoading ? (
  <h>Loading Please wait</h>
) :(
  <div>
<div className="breadcrumb">
<Breadcrumb  spacing='1px' separator={<IoMdArrowDropright className="icon-crumb"/>}>
<BreadcrumbItem>
  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbItem>
  <BreadcrumbLink color="red" href='#'>{pathname.substring(1)}</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
      <div id="fish-flex0">
          <h2 id="fish-head">Fish</h2>
          <div id="fish-flex4">
          <div  id="fish-flex1">
                  <img className="fish-img"src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0" alt="" />
                  <p id="fish-fish1">Farm-raised superior breed</p>
              </div>
              <div id="fish-fish3">{"|"}</div>
              <div id="fish-flex2">
                  <img className="fish-img"src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7" alt="" />
                  <p id="fish-fish2">No Added Chemical , Antibiotic residue free</p>
              </div>
          </div>
      </div>
   <div className="chick-div">
      {data.map((e)=>{
          return(
              <div className="chick-box" key={e._id}>
                   <img className="chick-img" onClick={()=>handleClick(e._id)} src={e.img1} alt=""/>
                    <h3 onClick={()=>handleClick(e._id)} className="chick-head extra-head">{e.item}</h3>
                    <p className="chick-head extra-chick">Lorem ipsum dolor sit amet, consectetur</p>
                     <div className="chick-wt" onClick={()=>handleClick(e._id)}>
                      <h4>Net wt:{e.Netwt}gms</h4>
                      <h4>Gross:{e.Grosswt}gms</h4>
                     </div>
                     <div className="chick-pr">
                      <h3 className="chick-mrp">MRP:₹{e.price}</h3>
                      <button className="chick-btn" onClick={()=>{addToCart(e._id)}}>ADD TO CART</button>
                     </div>
                     <div className="chick-dl" onClick={()=>handleClick(e._id)}>
                      <img  src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" />
                      <p>Today in <b>120 min</b></p>
                     </div>
              </div>
             
          )
      })}

   </div>
   </div>
  )
}

export default Fish
