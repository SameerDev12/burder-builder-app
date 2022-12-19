import React,{useState} from 'react';
import './Burger/Burger';
import Burger from './Burger/Burger';
import BurgerController from './Build_controller/BurgerController';
import Form from './Form/Form';



const Main = () => {

//Products
const [Products,setProducts]=useState({
  Lettuce:[],
  Bacon  :[],
  Cheese :[],
  Meat   :[]
});

//Prices of the product
const ProductPrices={
  Lettuce:1.00,
  Bacon:1.5,
  Cheese:2.00,
  Meat:3.00,  
};

//Total Price
const [TotalPrice,setTotalPrice]=useState(3.00);

//Product Names 
const ProductsName=["Lettuce","Bacon","Cheese","Meat"];

//This function is used to Add and delete the Product from the array.
const ProductAdder=(e,name)=>
{
  ProductsName.map(Pname=>{
    if(name===Pname)
    {
      const btn=e.target.innerHTML;
      if(btn==="More")
      {
        Products[name].push(<div key={Products[name].length-1} className={Pname}></div>);
        setTotalPrice(TotalPrice+ProductPrices[name]);
      }
      else
      {
        Products[name].pop();      
        if(TotalPrice!==0)
        {
          setTotalPrice(TotalPrice-ProductPrices[name]);
        }
      }
    }
  })
}


return (
  <>
    {/*Mounting the Burger Component*/}
    <Burger AddedProducts={Products}/>

    {/*Mounting the Burger Controller*/}
    <BurgerController 
      TotalPrice={TotalPrice} 
      Products={Products} 
      ProductsName={ProductsName} 
      ProductAdder={ProductAdder} 
    />
  </>
)
}

export default Main
