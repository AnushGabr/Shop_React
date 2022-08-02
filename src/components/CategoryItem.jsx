import {Link} from 'react-router-dom'

const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryDescription,
  strCategoryThumb
}) => {
  return (
    <div className='CategoryItem'>
      <img src= {strCategoryThumb}/>
      <h4>{idCategory}</h4>
      <h3>{strCategory}</h3>
      <h2>{strCategoryDescription}</h2>
      <Link to= {'/category/' + strCategory}>See more {strCategory}</Link>
    </div>
  )
}

export default CategoryItem