import React from 'react'
import "./ItemCard.css"
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {  useDispatch } from 'react-redux';
import { removeFromCart,decrementQty,incrementQty } from '../../redux/slices/CartSlices';

const ItemCard = ({id,img, name, price, qty}) => {
     const dispatch=useDispatch()

      return (
            <div className='itemcardfather'>
            <div className='itemcard'>
                  <div className='itemcard-1'>
                        <img src={img} alt="" />
                  </div>
                  <div className='itemcard-2'>
                        <h2>{name}</h2>
                        <span><MdDelete onClick={()=>dispatch(removeFromCart({id,img,name,price,qty}))} /></span>
                  </div>
                  <div className='itemcard-3'>
                        <span>&#8377;{price}</span>
                        <div className='itemcard-4'>
                              <FaMinus onClick={()=>qty >1 ? dispatch(decrementQty({id})):(qty=0)} />
                              <span>{qty}</span>
                              <FaPlus onClick={()=>qty>=1 ? dispatch(incrementQty({id})):(qty=0)}/>
                        </div>
                  </div>
            </div>

            </div>
      )
}

export default ItemCard