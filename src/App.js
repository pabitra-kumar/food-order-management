import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Cards } from './Components/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart';
import { Intro } from './Components/Intro';
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
 // const [data, setdata] = useState(null)
 // let RandomURL = "https://www.themealdb.com/api/json/v1/1/random.php"
  // let arr=[];
  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //   .then(response => {
  //     if(response.ok)
  //     {
  //       return response.json()
  //     }
  //     throw response
  //   })
  //   .then(res => 
  //     {
  //       setdata(res);
  //     })
  // }, [])
  // for(let i=0;i<50;i++)
  // {
  // let obj = {
  //   key: data.idMeal,
  //   name: data.strMeal,
  //   img: data.strMealThumb,
  // }
  // arr.push(obj);
  // }
 const [foods,setFoods] = useState(arr);
 const [cartItems, setCart] = useState([]);
 let addToCart = (item) =>{
  setCart([...cartItems,item])
  setFoods(
    foods.filter((e)=>{
      return e!==item
    })
  )
 }

 let removeFromCart = (item) => {
  setCart(
    cartItems.filter((e)=> {
      return e!== item
    })
    )
    setFoods([...foods,item])
 }
  return (
    <>
    <Router>
    <Header num={cartItems.length}/>
      <Routes>
        <Route path="/food-order-management/" element={
          <>
          <Intro/>
        <Cards foods={foods} addToCart={addToCart}/>
        </>
        }/>
        <Route path="/food-order-management/cart" element={<Cart foods={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
