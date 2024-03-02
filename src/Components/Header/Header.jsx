import React from 'react'
import logo from "../../assets/hamburger.png"
import "./Header.css"
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/SearchSlice'
const Header = ({scroll,setCartShow}) =>{
      const dispatch=useDispatch()
      return (
            <>
            <div className={`container ${scroll ? "sticky-header" : ""}`}>
                  <div className='navbar'>
                        <img src={logo} alt="" />
                  </div>
                  <div className="navbar-1">
                        <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name="search" placeholder='search' autoComplete='off' />
                  </div>
            </div>
            <FaShoppingCart onClick={()=>setCartShow(true)} className='shopping'/>
            </>
      )
}

export default Header