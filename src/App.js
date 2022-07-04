import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Cards } from './Components/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart';
function App() {
  let arr1 = ["chips", "Burger", "Sandwitch", "MOMO", "Bread", "Pizza", "Lassi", "juice", "Dosa", "Roti", "Paratha", "Samosa", "Curry"]
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let obj = {
      key: (i + 1),
      name: arr1[i],
      img: 'https://source.unsplash.com/400x400/?' + arr1[i] + ',recipie',
      inCart: 0,
      inStock: 10,
    }
    arr.push(obj)
  }
  const [foods, setFoods] = useState(arr);
  const [num, setX] = useState(0);
  let addToCart = (item) => {
    if (item.inCart === 0) {
      setX( num + 1)
    }
    if (item.inStock > 0) {
      setFoods(
        foods.filter((e) => {
          if (e === item) {
            e.inStock -= 1
            e.inCart += 1
            return e
          }
          else {
            return e
          }
        })
      )
    }
    else {
      alert("OUT OF STOCK")
    }
  }

  let removeFromCart = (item) => {
    if (item.inCart === 1)
      setX( num - 1);

    setFoods(
      foods.filter((e) => {
        if (e === item)
        {
          e.inCart -= 1
          e.inStock += 1
          return e
        }
        else
          return e
      })
    )
  }
  let remove = (item) => {
    setX( num - 1);
    setFoods(
      foods.filter((e) => {
        if (e === item)
        {
          e.inStock = 10
          e.inCart = 0
          return e
        }
        else
          return e
      })
    )
  }
  return (
    <>
      <Router>
        <Header num={num} />
        <Routes>
          <Route path="/food-order-management/" element={
            <>
              <Cards foods={foods} addToCart={addToCart} remove={remove} removeFromCart={removeFromCart} />
            </>
          } />
          <Route path="/food-order-management/cart" element={
            <Cart foods={foods} num={num} addToCart={addToCart} remove={remove} removeFromCart={removeFromCart} />
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
