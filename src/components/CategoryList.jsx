import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({categories}) => {
  return (
    <div className='CategoryList'>
      {
        categories.map(category => {
          return <CategoryItem key={category.idCategory} {...category}/>
        })
      }
    </div>
  )
}

export default CategoryList