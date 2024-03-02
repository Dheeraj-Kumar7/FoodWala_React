import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Category from './Components/Category/Category'
import FoodItem from './Components/FoodItem/FoodItem'
import Cart from './Components/Cart/Cart'
import { useState, useEffect } from 'react'


const App = () => {

  const [scroll, setScroll] = useState(false)
  const handleScroll = () => {
    const offSetY = Math.floor(window.scrollY)
    if (offSetY > 74) {
      setScroll(true)
    } else {
      setScroll(false)
    }

  }
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

  }, [])
  const [cartShow, setCartShow] = useState(false)
  return (
    <div>
      <Header setCartShow={setCartShow}scroll={scroll} setScroll={setScroll} />
      <Category />
      <FoodItem />
      {cartShow && <Cart setCartShow={setCartShow} />}

    </div>
  )
}

export default App