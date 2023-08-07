import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const SingleCocktail = ({id,name,img,info,glass}) => {
  return (
    <article className='cocktail'>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-details">
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        </div>
        <Link to={`/cocktail/${id}`} className='btn details-btn'>details</Link>
      
      
    </article>
      )
}

export default SingleCocktail
