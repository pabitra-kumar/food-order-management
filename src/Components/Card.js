import React from 'react'
import './component.css'
export const Card = ({img, food, name, remove, removeFromCart, addToCart}) => {
  let cardStyle={
    
  }
  let imgStyle={
    height:"170px",
    width:"100%",
  }
  let nmStyle={
    color: "rgb(251, 255, 5)",
    margin:"5px 0 0 0",
  }
  let pStyle = {
    color: "rgb(133, 9, 9",
  }
  return (
    <>
    <div id='card' className='CartCard' style={cardStyle}>
      <div className='info'>{(food.inCart==1)?"One item is in cart":(food.inCart==0)?'nothing in Cart':''+food.inCart+' items are in Cart'}</div>
      <a><img src={img} className='image' alt="image not available" style={imgStyle} /></a>
      <h5 style={nmStyle}>{name}</h5>
      {(food.inCart===0)
      ?(<a type="button" onClick={()=>{addToCart(food)}} className='adtocart' >Add to Cart</a>)
      :(<div className='d-flex flex-button' > 
      <a onClick={()=>{addToCart(food)}}>+</a>
      <a onClick={()=>{removeFromCart(food)}}>-</a>
      <a className='remove' onClick={()=>{remove(food)}}>-</a>
      </div>)
      }
      <p style={pStyle}>{food.inStock} items are left</p>
    </div>
    </>
  )
}
