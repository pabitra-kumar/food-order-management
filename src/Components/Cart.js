import React from 'react'
import { CartCard } from './CartCard'
import './component.css'
export const Cart = ({foods, removeFromCart}) => {
  return (
    <div className="" id='cards'>
      {(foods.length<=0)?<h4>Your Cart is Empty</h4>:(foods.map((food) =>{
        return<CartCard food={food} img={food.img} removeFromCart={removeFromCart} name={food.name} key={food.key}/>
      }) )}
    </div>
  )
}
