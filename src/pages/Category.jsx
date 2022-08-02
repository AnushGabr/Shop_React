import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import { getFilteredCategory } from '../api';
import MealList from '../components/MealList';
import './Category.css'

const Category = () => {

  const {name} = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
      getFilteredCategory(name).then(response => {
        setMeals(response.meals)
      })
  }, [name])

  return (
    <div className='Category'>
      {name}
      <MealList meals = {meals}/>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Category