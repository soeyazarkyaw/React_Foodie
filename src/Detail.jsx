import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './Loading'

const Detail = () => {
  const {id} =useParams();
  const [meal,setMeal] = useState({});
  const [loading,setLoading]= useState(true)
  const getMealDetail = async()=>{
    const{data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMeal(data.meals[0])
    setLoading(false)
  }
  console.log(meal);
  useEffect(()=>{
    getMealDetail()
  },[])
  return (
    <>
      {loading? <Loading/> :(
        <div className='flex flex-col gap-5'>
        <img src={meal.strMealThumb} width={250+"px"} className='rounded-xl' alt="" /> 
        <h5 className='text-sm bg-sky-400 w-24 text-center rounded-md p-1 text-cyan-50'>{meal.strCategory}</h5>
        <h2 className='text-2xl uppercase font-bold'>{meal.strMeal}</h2>
        <h2 className='text-xl uppercase font-bold'>Instruction</h2>
        <p className='text-gray-600'>{meal.strInstructions}</p>
        <div className='flex items-center gap-4'>
          <a href={meal.strYoutube} target='blank'><AiFillYoutube className='text-5xl text-red-700'/></a>
          <p className='text-gray-600'>Watch On Youtube</p>
        </div>
      </div>
      )}
    </>
  )
}

export default Detail