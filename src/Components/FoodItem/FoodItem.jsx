import React from 'react'
import FoodCard from '../FoodCard/FoodCard'
import "./FoodItem.css"
import FoodData from "../../Data/FoodData.js"

import { useSelector } from 'react-redux'
const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  // const search = useSelector((state) => state.search.search)
  return (

    <div className='fooditem'>
      {FoodData.filter((food) => {
        if (category === "All") {
          return food
        } else {
          return category === food.category
        }
      }).map((food) => {
        return <FoodCard key={food.id} id={food.id} img={food.img} name={food.name} price={food.price} rating={food.rating} desc={food.desc} />
      })
      }
      


    </div>
  )
}

export default FoodItem