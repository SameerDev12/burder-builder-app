import React from 'react';
import { Link } from 'react-router-dom';
import './Build_controller.css';


const BurgerController = ({TotalPrice,Products,ProductsName,ProductAdder}) => {

return (
  <div className='build-container'>
    <div>
      <span>Current price: </span>
      <span>${TotalPrice}</span>
    </div>
    <div className='build-controller'>
      {ProductsName.map((name,id)=>(
          <div key={id} className='build-order'>
            <h4>{name}</h4>
            <div className='controlle-btn-container'>
              {
                Products[name].length!==0?
                <button onClick={(e)=>{ProductAdder(e,name)}} className='btn-controller'>Less</button>
                :
                <button disabled className='btn-controller btn-disable'>Less</button>
              }
              <button onClick={(e)=>{ProductAdder(e,name)}} className='btn-controller'>More</button>
            </div>
          </div>
      ))}
    </div>
    {
      TotalPrice!==3?
      <button className='btn-order'><Link className='link-order' to={'/form'}>SIGN UP TO ORDER</Link></button>
      :
      <button disabled className='btn-order btn-order-disable'>SIGN UP TO ORDER</button>
    }
  </div>
)
}

export default BurgerController
