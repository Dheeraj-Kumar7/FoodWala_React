import React from 'react'
import "./Cart.css"
import { IoMdClose } from 'react-icons/io'
import {NavLink} from "react-router-dom"
import ItemCard from '../ItemCard/ItemCard'
import { useSelector } from 'react-redux'
const Cart = ({ setCartShow }) => {

      const cartItems = useSelector((state) => state.cart.cart)
      const totalQty=cartItems.reduce((totalQty,item)=>totalQty +item.qty,0)
      const totalPrice=cartItems.reduce((qty,item)=>qty + item.qty * item.price,0)
      console.log(cartItems)
      return (
            <div className='cart'>
                  <div className="cart-1">
                        <span>my order</span>
                        <IoMdClose onClick={() => setCartShow(false)} />
                  </div>
                  {cartItems.length>0 ? cartItems.map((item) => (
                        <ItemCard key={item.id} id={item.id} price={item.price} img={item.img} name={item.name}
                        qty={item.qty} />

                  )):<h2>your cart is empty</h2>}


                  <div className="cart-2">
                        <h3>Item:{totalQty} </h3>
                        <h3>total amout:{totalPrice} </h3>
                        <hr />
                        <button className='checkout'><NavLink to="success">checkout</NavLink></button>
                  </div>
                  
            </div>
      )
}

export default Cart