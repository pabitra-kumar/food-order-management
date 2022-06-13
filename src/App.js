import './App.css';
import ReactDOM from 'react-dom'
import { useState } from 'react';
import { Header } from './Components/Header';
import { Cards } from './Components/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart';
function App() {
  let arr1 = ["chips","Burger","Sandwitch","MOMO","Bread","Pizza","Lassi","juice","Dosa","Roti","Paratha","Samosa","Curry"]
  let arr=[];
  for(let i=0;i<arr1.length;i++)
  {
    let obj={
      key:(i+1),
      name:arr1[i],
      img:'https://source.unsplash.com/400x400/?'+arr1[i]+',recipie',
    }
    arr.push(obj)
  }
 const [foods,setFoods] = useState(arr);
 const [cartItems, setCart] = useState([]);
 let addToCart = (item) =>{
  setCart([...cartItems,item])
  setFoods(
    foods.filter((e)=>{
      return e!=item
    })
  )
 }

 let removeFromCart = (item) => {
  setCart(
    cartItems.filter((e)=> {
      return e!= item
    })
    )
    setFoods([...foods,item])
 }
  return (
    <>
    <Router>
    <Header num={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Cards foods={foods} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart foods={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
