import {Link} from 'react-router-dom'

const MealItem = ({strMeal, strMealThumb, idMeal}) => {


  return (
    <div className='MealItem'>
        <img src= {strMealThumb}/>
        <h4>{idMeal}</h4>
        <Link to={'/recipe/' + idMeal}>See {strMeal}</Link>
        <hr/>
    </div>
  )
}

export default MealItem