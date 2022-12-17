import React from 'react'
import './Burger.css'


const Burger = ({AddedProducts}) => {
  return (
    <div className='burger-container'>
       <div className="burger-upper"></div>
       <div className='burger-product-container'>
         {
           AddedProducts["Lettuce"].length===0&&
           AddedProducts["Bacon"].length===0&&
           AddedProducts["Cheese"].length===0&&
           AddedProducts["Meat"].length===0
           ?<h3>No Ingredents Added</h3>:null         
         }
  
         {
           AddedProducts["Lettuce"].map(data=>(<h1>{data}</h1>))
         }
  
         {
           AddedProducts["Bacon"].map(data=>(<h1>{data}</h1>))
         }
  
         {
           AddedProducts["Cheese"].map(data=>(<h1>{data}</h1>))
         }
  
         {
           AddedProducts["Meat"].map(data=>(<h1>{data}</h1>))
         }       
       </div>       
       <div className="burger-lower"></div>
    </div>
  )
}

export default Burger
