import React from 'react'
import './Headr.css'
import Cart from '../Cart/Cart'
export const Header = () => {
  return (
   
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div className="container-fluid d-flex justify-content-between">
   <div className="cart d-flex align-items-center">
   <a className="navbar-brand fs-1" href="/">GGFUT</a>
    <Cart/>
   </div>
   <div className="logBrand">
   <a href="/">
    <img className='rounded-5' src="../../public/logo.png" alt="" />
    </a>
   </div>
  </div>
</nav>
    </>
  
  )
}
