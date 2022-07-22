import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../module.css"
export default function Bestsellers() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9000/Bestseller")
        .then((response)=>{
            console.log(response)
          setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

  return(

    <div className="items-div">
        {data.map((e)=>{
            return(
                <div className="chick-box" key={e.id}>
                     <img className="chick-img" src={e.image} alt=""/>
                      <h3  className="chick-head">{e.name}</h3>
                      <p className="chick-head extra-chick">{e.des}</p>
                       <div className="chick-wt"  key={e.id}>
                        <h4>Net wt:{e.weight}</h4>
                        <h4>Gross:{e.gross}</h4>
                       </div>
                       <div className="chick-pr"  key={e.id}>
                        <h3 className="chick-mrp">MRP:₹{e.markprice}</h3>
                        <button className="chick-btn">ADD TO CART</button>
                       </div>
                       <div className="chick-dl"  key={e.id} >
                        <img  src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" />
                        <p>Today in <b>120 min</b></p>
                       </div>
                </div>
               
            )
        })}

   </div>
  )
}