import React, { useState ,useEffect, Fragment } from 'react'
import useFetch from '../../hooks/useFetch'
import './Footer.css'
export const Footer = () => {
  const [links,setLinks]= useState([])
  const {data , loading , error} = useFetch("/links")
useEffect(()=>{
 data && setLinks(data);
},[data])
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-dark  navbar-dark sticky-bottom">
  <div className="container-fluid d-flex flex-row-reverse justify-content-between p-2 align-items-center ">
    <div className="icon d-flex flex-row-reverse justify-content-between ">
    {  
     links.map(link=>(
    <Fragment key={link.id}>
        <a className='px-2 iconLink fs-5' href={link.attributes.url}>
        
        <i className={link.attributes.icon}></i>
        </a>
    </Fragment>
      
     ))
     
     
     }
    </div>
   <div className="copy pt-2">
   <p className='text-info fs-5'>
     © 2024 all right reversed
     </p>
   </div>
    
  </div>
</nav>
    </>
  )
}
