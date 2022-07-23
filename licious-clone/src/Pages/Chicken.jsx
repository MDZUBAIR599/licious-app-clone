import React from 'react'
import {useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios"

import {useContext} from "react"
import "../module.css"

import { Heading } from '@chakra-ui/react'
import { CartContext } from '../context/Cartcontext'
function Chicken() {
  const navigate=useNavigate()
  const [data,setData] = useState([])
  const [isLoading,setLoading] = useState(true)
  const {cart,setCart}  = useContext(CartContext)
  useEffect(()=>{
      axios.get("http://localhost:9000/chicken")
      .then((response)=>{
        setLoading(false)
        setData(response.data)
      })
      .catch((error)=>{
          console.log(error);
      })
  },[])
  const  handleClick=(id)=>{
      navigate(`/chicken/${id}`)
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
    <div style={{bagroundColor:"red"}}> <Heading bg={"black"} >Loading Please wait</Heading></div>
   
  ) :(
   <div className="chick-div">
      {data.map((e)=>{
          return(
              <div className="chick-box" key={e._id}>
                   <img className="chick-img" onClick={()=>handleClick(e._id)} src={e.img1} alt=""/>
                    <h3 onClick={()=>handleClick(e._id)} className="chick-head">{e.item}</h3>
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
)
}

export default Chicken