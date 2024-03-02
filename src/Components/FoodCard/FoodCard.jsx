import React from 'react'
import "./FoodCard.css"
import { IoMdStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlices';
const FoodCard = ({ img,id,name,price,rating,desc }) => {
     
      const dispatch = useDispatch()
      return (

            <div className='foodcard'>
                  <div className='img'>
                        <img src={img} alt="" />
                  </div>
                  <div className='details'>
                        <h2>{name}</h2>
                        <span>&#8377;{price}</span>
                  </div>
                  <p>{desc.slice(0, 50)}...</p>
                  <div className='details-1'>
                        <span>
                              <IoMdStar />   {rating}
                        </span>
                        <button className='btnn' onClick={() => {
                              console.log("ram")
                              dispatch(addToCart({ id, 
                                    img,name, price, rating, price, qty: 1 }))
                        }}>add to cart</button>
                  </div>
            </div>
      )
}

export default FoodCard