import React, { useState ,useEffect } from 'react'
import  './Products.css'
import useFetch from '../../hooks/useFetch'
import LazyLoad from 'react-lazy-load';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import StoreContext from '../../hooks/StoreContext';
import { useContext } from 'react';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import {  Link } from "react-router-dom";


export default function Products() {
  const {filter} =useContext(StoreContext)
    const [products,setProducts]= useState([])
    const {data , loading , error} = useFetch(filter)
  useEffect(()=>{
   data && setProducts(data);
  },[data])
  const dispatch = useDispatch()
  return (
    <MDBRow className='product container  text-center  mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-5 my-3'>
       
    
    
    { loading ?   <LazyLoad height={762}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
    : 
    products.map(product=>(
      <MDBCol key={product.id}>
   
      <MDBCard className='h-100  cardProduct  '>
      <Link to={"/products/"+product.id}>
        <MDBCardImage
          src={product.attributes.image.data[0].attributes.formats.thumbnail.url}
          alt='...'
          position='top'
        />
        <MDBCardBody className='text-light  d-flex flex-fill  flex-column cardBody'>
          <MDBCardTitle className='fs-3 text-info'>{product.attributes.title}</MDBCardTitle>
          <MDBCardText className='DecCard '>
          {product.attributes.Desc}
          </MDBCardText>
        </MDBCardBody>
        </Link>
        <MDBCardFooter className='d-block'>
       
       <div className="subDetails d-flex  justify-content-between   align-items-center">
       <p className='text-light fs-3'>{product.attributes.price} $</p>
       {' '}
            <a href={product.attributes.link.startsWith('http') ? product.attributes.link : `https://${product.attributes.link}`} target="_blank" className='text-success'>
            <i className="bi bi-whatsapp fs-3 was"/>
            </a>
       
             
             
        </div>    
       
      
              <button className='btn product-btn fs-6 rounded-4 p-2 btn-info '
        onClick={()=>{
          dispatch(addToCart(
           {
            id:product.id,
            title:product.attributes.title,
            price:product.attributes.price,
            image:product.attributes.image.data[0].attributes.formats.thumbnail.url
           }

          ))
        }}
        >ADD TO CART</button>
        </MDBCardFooter>
    
      </MDBCard>
   
    </MDBCol>
    ))
}
</MDBRow>
   

  )
}
