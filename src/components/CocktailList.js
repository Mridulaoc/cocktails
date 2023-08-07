import React from 'react'
import Loading from './Loading'
import SingleCocktail from './SingleCocktail'
import { useGlobalContext } from '../Context'
import '../App.css'



const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails)

  if (loading) {
      return <Loading />
  }
  
  if (cocktails.length < 1) {
    return<h2 className='title'>No cocktails matched your search criteria</h2>
  }
  return (
    <section className='cocktails-section'>
      <h2 className="title">cocktails</h2>
      <div className="cocktails-list">
      {cocktails.map((cocktail) => {
        return <SingleCocktail key={cocktail.id} {...cocktail} />
      })}
      </div>
    </section>
  )
}

export default CocktailList
