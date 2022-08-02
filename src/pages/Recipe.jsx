import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'


const Recipe = () => {

  const {id} = useParams()
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getMealById(id).then(data => {
      setRecipe(data.meals[0])
    })
  }, [id])

  return (
    <div className='Recipe'>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h4>{recipe.idMeal}</h4>
      <h4>{recipe.strMeal}</h4>
      <img src={recipe.strMealThumb}/>
    </div>
  
  )
}

export default Recipe