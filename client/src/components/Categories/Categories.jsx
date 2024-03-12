import React, { useState ,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetch from '../../hooks/useFetch'
import "./Categories.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Categories() {
    const [categoroies,setCategories]= useState([])
    const {data , loading , error} = useFetch("/categories?populate=*")
    useEffect(()=>{
     data && setCategories(data);
    },[data])

  return (
    <Swiper 
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
       { loading ? "Loading" 
    : 

    categoroies.map(category=>(
      <SwiperSlide  key={category.id} >  
    <img className="img" alt="photo" src={category.attributes.image.data.attributes.url}/>
  </SwiperSlide>
  
    ))
}
</Swiper>
  )
}
