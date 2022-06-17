import React from 'react'
import './component.css'
export const CartCard = ({img, food, name, removeFromCart}) => {
  let cardStyle={
    
  }
  let imgStyle={
    height:"170px",
    width:"250px",
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
      <a href="#" ><img src={img} className='CardImage' alt="image not available" style={imgStyle} /></a>
      <h5 style={nmStyle}>{name}</h5>
      <a href="#" type="button" onClick={()=>{removeFromCart(food)}} className='adtocart' >Remove From Cart</a>
    </div>
    </>
  )
}