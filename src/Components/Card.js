import React from 'react'
import './component.css'
export const Card = ({img, food, name, addToCart}) => {
  let cardStyle={
    
  }
  let imgStyle={
    height:"25vh",
    width:"19vw",
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
      <a href="#" type="button" onClick={()=>{addToCart(food)}} className='adtocart' >Add to Cart</a>
    </div>
    </>
  )
}
