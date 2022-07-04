import React from 'react'
import { CartCard } from './CartCard'
import './component.css'
export const Cart = ({foods, num, remove, addToCart, removeFromCart}) => {
  return (
    <>
    <div className="" id='cards'>
      {(num<=0)?<h4>Your Cart is Empty</h4>:(foods.map((food) =>{
        if(food.inCart>0)
        return<CartCard food={food} img={food.img} addToCart={addToCart} remove={remove} removeFromCart={removeFromCart} name={food.name} key={food.key}/>
        else
        return
      }) )}
    </div>
    
    </>
  )
}
