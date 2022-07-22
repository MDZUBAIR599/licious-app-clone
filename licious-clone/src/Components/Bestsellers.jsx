import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../module.css"
export default function Bestsellers() {

    const [query, setquery] = useState("chicken");
    const [data,setdata]=useState([])
    const getdata = () => {
        axios
          .get(
            `http://localhost:9000/Bestseller`
          )
          .then((res) => {
            console.log(res)
            setdata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        getdata();
      },[]);
    

  return (
    <div> 
         <Slide>
         {data.map((dat)=> (
            <div  className="each-slide" key={dat.id}>
              <div  style={{'backgroundImage': `url(${dat.image})`}}>
                <span>{dat.id}</span>
              </div>
            </div>
          ))} 
        </Slide>
       
        
    </div>
  );
}