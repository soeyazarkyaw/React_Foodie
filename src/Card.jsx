import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-72 border-2 flex justify-center items-center flex-col relative gap-2 h-[400px] rounded-xl px-5 py-2 shadow-md hover:scale-110 transition duration-200 hover:shadow-xl'>
        <img src={meal.strMealThumb} width={250+"px"} className='rounded-xl absolute top-3' alt="" /> 
        <h3 className='absolute top-[300px]'>{meal.strMeal}</h3>
        <button className='bg-sky-500 py-2 px-5 rounded absolute bottom-6 text-sky-50'><Link to={`/detail/${meal.idMeal}`}>Details</Link></button>
    </div>
  )
}

export default Card