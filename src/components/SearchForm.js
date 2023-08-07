import React, {useRef,useEffect} from 'react'
import { useGlobalContext } from '../Context' 


const SearchForm = () => {
  
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

   const handleSubmit = (e) => {
       e.preventDefault();
     }

  
  useEffect(() => {
    searchValue.current.focus();
  },[])

  return ( 
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="name">search your favourite cocktail here</label>
        <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
      </form>
    </section>
  )
}

export default SearchForm
