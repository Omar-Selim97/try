import React, { useEffect, useState } from 'react'
import "./productPage.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { addToCart } from '../../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { FaWhatsapp } from "react-icons/fa6";
import Heading from '../../Heading/Heading';

export default  function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Assuming you have a valid access token stored in your application state or retrieved from your authentication flow
        const accessToken = import.meta.env.VITE_API_TOKEN;

        // Make a request to fetch the product details with the 'Authorization' header
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}?populate=*`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const fetchedProduct = response.data;

        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Error loading product details.</div>;
  }
  const dispatch = useDispatch()
  return (

    <>
    <Header/>
    <div className="product-details-container my-3">
    <Heading/>
      <div className="product-image-container">

        <img src={product.data.attributes.image.data[0].attributes.formats.thumbnail.url} alt="Product" />
      </div>
      <div className="product-info-container">
        <h2 className="product-title"> {product.data.attributes.title}</h2>
        <p className="product-description">
        {product.data.attributes.Desc}
        </p>
        <p className="product-price">$ {product.data.attributes.price}</p>
        <button className='btn product-btn rounded-4 p-2 btn-info fs-4 '
        onClick={()=>{
          dispatch(addToCart(
           {
            id:product.id,
            title:product.data.attributes.title,
            price:product.data.attributes.price,
            image:product.data.attributes.image.data[0].attributes.formats.thumbnail.url
           }

          ))
        }}
        >ADD TO CART</button>

          <div className="d-block mt-5 fs-4">
            تواصل معنا
          </div>
        
         <a href={product.data.attributes.link} className="d-block link-info">
         <FaWhatsapp className='fs-2 mt-3' />
         </a>
      
      
      </div>
    </div>
   
    
    <Footer/>
    </>
  )
}
