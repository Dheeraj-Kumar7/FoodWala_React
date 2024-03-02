import React,{useEffect, useState} from 'react'
import "./Category.css"
import FoodData from '../../Data/FoodData';
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from '../../redux/slices/CategorySlice';
const Category = () => {
      const [category,setCategories]=useState([])
      const listUniqueCategory=()=>{
            const uniqueCategories=[...new Set(FoodData.map((food)=>food.category))];
            setCategories(uniqueCategories)
            console.log(uniqueCategories)
      }
      useEffect(()=>{
            listUniqueCategory()
      },[])
      const dispatch=useDispatch();
      const selectCategory=useSelector((state)=>state.category.category)
      return (
            <div className='All-btn'>
                  <h1>top search Food</h1>
                  <div className="btn">
                  <button onClick={()=>dispatch(setCategory("All"))} className='UniqueBtn'>All</button>
                        {category.map((category,index)=>{
                              return(
                                    <button onClick={()=>dispatch(setCategory(category))} key={index} className='UniqueBtn'>{category}</button>
                                    
                              )
                        })}
                        
                  </div>
            </div>
      )
}

export default Category