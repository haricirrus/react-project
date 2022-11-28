
import './Product.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const[Products,setProducts]=useState([])
  const fetchData=()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>setProducts(res.data.products)
       )
    .catch((err)=>{console.log(err)})
  }
  useEffect(
    ()=>{fetchData()},[])
  return (
    <div>
        
        
        <div className='product-container'> {Products.map((product)=>(<div className='product'>
        <h4>{product.title}</h4>
        <span><img className='thumbnail' src={product.thumbnail}></img></span>
        <span className='price'>{product.price}</span>
        <span className='rating'>{product.rating}</span>
    </div>))}</div>
        
    
    </div>
  )
}

export default Product