import React, { useState ,useEffect, Fragment } from 'react'
import useFetch from '../../../hooks/useFetch'
import CheckBox from './CheckBox'
import './checkBox.css'
export default function CateFilter({category}) {
    const [categoroies,setCategories]= useState([])
    const {data , loading , error} = useFetch("/categories?populate=*")
    useEffect(()=>{
     data && setCategories(data);
    },[data])
  return (
    <div className='checkbox'>
            { loading ? "Loading" 
    : 

    categoroies.map(category=>(
        <Fragment key={category.id}>
            <CheckBox category={category}/>
        </Fragment>
    ))

    }
    </div>
  )
}
