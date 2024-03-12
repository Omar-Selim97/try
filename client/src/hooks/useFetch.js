import { useEffect, useState } from "react"
import { fetchApi } from './fetchApi'

const useFetch = (endPoint)=>{
    const [data,setDat] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

   useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setLoading(true)
        const res = await fetchApi.get(endPoint)
        setDat(res.data.data)
      }catch(error){
        setError(error)
      }
      setLoading(false)
    }
    
    fetchData()
   },[endPoint])
   return {data , loading , error}
}
export default useFetch