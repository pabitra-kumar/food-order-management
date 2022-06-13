import React from 'react'
import './component.css'
export const CartCard = ({img, food, name, removeFromCart}) => {
  let cardStyle={
    
  }
  let imgStyle={
    height:"25vh",
    width:"20vw",
    borderTopRightRadius:"5vh",
    borderTopLeftRadius:"5vh",
  }
  let nmStyle={
    color: "rgb(251, 255, 5)",
    margin:"1% 0 0 0"
  }
  return (
    <>
    <div id='card' style={cardStyle}>
      <a href="#" ><img src={img} className='image' alt="image not available" style={imgStyle} /></a>
      <h5 style={nmStyle}>{name}</h5>
      <a href="#" type="button" onClick={()=>{removeFromCart(food)}} className='adtocart' >Remove From Cart</a>
    </div>
    </>
  )
}