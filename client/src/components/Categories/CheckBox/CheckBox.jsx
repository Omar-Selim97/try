import React, { useContext ,useEffect,useState } from 'react'
import StoreContext from '../../../hooks/StoreContext'
import qs, { stringify } from 'qs'
import './checkBox.css'
export default function CheckBox({category}) {
  const {setFilter,selectedCategories , setSelectedCategories}=useContext(StoreContext)
  useEffect(
    ()=>{
      const query = stringify({
        filters:{
          categories:{
            id:{
              $in:selectedCategories
            }
          }
        }
      })
      setFilter(import.meta.env.VITE_API_URL+"/products?populate=*&"+query);
    }
    ,[selectedCategories])
  const handleFilterChange = (e) =>{
    const selectedId =e.target.dataset.category
    const isChecked = e.target.checked
    setSelectedCategories(selectedCategories =>{
    if(isChecked) return  [...selectedCategories,selectedId]
    return selectedCategories.filter(id => id !== selectedId)
    e.preventDefault();
    })
  

  }

  return (
    <div className=' d-flex  text-center justify-content-end p-1 '>
       <div className="badge fs-5  ">
            {category.attributes.title}
          </div>
        <label className="toggler-wrapper style-1 ">
          <input
          onChange={handleFilterChange}
          data-category={category.id}
          type="checkbox" />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
         
        </label>
    </div>
  )
}
