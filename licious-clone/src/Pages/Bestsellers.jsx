import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import 'react-slideshow-image/dist/styles.css'
import "../module.css"
import { CartContext } from '../context/Cartcontext';

export default function Bestsellers() {
    const {cart,setCart}  = useContext(CartContext)
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9000/Bestseller")
        .then((response)=>{
            // console.log(response)
          setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  
 function addToCart(id){
    let exist=cart.filter((item)=>item.id===id)
    if(exist.length!==0){
        alert("Item is already in cart")
    }else{
    const add=data.find((item)=>item.id===id)
    setCart([...cart,add])
    }

 }
  return(

    <div className="items-div">
        {data.map((e)=>{
            return(
                <div className="seller-box" key={e.id}>
                     <img className="seller-img" src={e.image} alt=""/>
                      <h3  className="seller-head">{e.name}</h3>
                      <p className="seller-head seller-chick">{e.des}</p>
                       <div className="seller-wt"  key={e.id}>
                        <h4>Net wt:{e.weight}</h4>
                        <h4>Gross:{e.gross}</h4>
                       </div>
                       <div className="seller-pr"  key={e.id}>
                        <h3 className="seller-mrp">MRP:₹{e.markprice}</h3>
                        <button className="seller-btn" o onClick={()=>{addToCart(e.id)}}>ADD TO CART</button>
                       </div>
                       <div className="seller-dl"  key={e.id} 

                       >
                        <img  src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" />
                        <p>Today in <b>120 min</b></p>
                       </div>
                </div>
               
            )
        })}

   </div>
  )
}