import React, { useState,useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


const Cocktail = () => {

  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchCocktail = async () => {
      try{
      const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const { strDrink: name, strAlcoholic: info, strDrinkThumb: image, strCategory: category, strInstructions: instructions, strGlass: glass,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0];
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
          
          const newCocktail = { name, info, image, category, instructions, glass, ingredients };
          setCocktail(newCocktail);
          
        }
        else {
          setCocktail([]);
        }
      }
      catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
    fetchCocktail();
  }, [id])
  
  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="title">no cocktail to display</h2>
  }

  const { name, image, glass, instructions, info, category, ingredients } = cocktail;

    return (
      <section className="single-cocktail">
        <Link to={'/'} className='btn back-home'>back home</Link>
        <h2 className="title">{name}</h2>
        <div className="drink-info">
          <img src={image} alt={name} />
          <div className="drink-details">
            <p><span className='drink-data'>name :</span>{name}</p>
            <p><span className='drink-data'>category :</span>{category}</p>
            <p><span className='drink-data'>info :</span>{info}</p>
            <p><span className='drink-data'>glass :</span>{glass}</p>
            <p><span className='drink-data'>instructions :</span>{instructions}</p>
            <p><span className='drink-data'>ingredients :</span>
              {ingredients.map((item,index) => {
                return item ? <span key={index}>{item}</span> : 'null';
              })}
            </p>
          </div>
        </div>
     </section>
    )
  }


export default Cocktail
