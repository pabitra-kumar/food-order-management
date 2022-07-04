import React from 'react'
import './component.css'
export const CartCard = ({img, food, name, remove, addToCart, removeFromCart}) => {
  let cardStyle={
    
  }
  let imgStyle={
    height:"170px",
    width:"100%",
    borderTopRightRadius:"30px",
    borderTopLeftRadius:"30px",
  }
  let nmStyle={
    color: "rgb(251, 255, 5)",
    margin:"5px 0 0 0"
  }
  return (
    <>
    <div id='card' style={cardStyle}>
      <a ><img src={img} className='CardImage' alt="image not available" style={imgStyle} /></a>
      <h5 style={nmStyle}>{name}</h5>
      <div className='d-flex flex-button' > 
      <a onClick={()=>{addToCart(food)}}>+</a>
      <a onClick={()=>{removeFromCart(food)}}>-</a>
      <a className='remove' onClick={()=>{remove(food)}}>-</a>
      </div>
      <p>Quantity: {food.inCart}</p>
    </div>
    </>
  )
}