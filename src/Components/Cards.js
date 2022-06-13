import React from 'react'
import './component.css'
import { Card } from './Card'
export const Cards = ({foods, addToCart}) => {
  return (
    <>
    <div id='cards'>
      {foods.map((food) =>{
        return<Card food={food} addToCart={addToCart} img={food.img} name={food.name} key={food.key}/>
      }) }
    </div>
    </>
  )
}
