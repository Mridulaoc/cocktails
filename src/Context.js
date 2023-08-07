import React, { useContext, useState, useEffect, createContext } from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async() => {
        setLoading(true);
        try
        {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {

                const newCocktails = drinks.map((drink) => {
                    const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = drink;
                    return {id:idDrink, name:strDrink,info:strAlcoholic, img:strDrinkThumb, glass:strGlass}                    
                })
                setCocktails(newCocktails);}
                    
            else {
                setCocktails([]);
            }
            setLoading(false);
            

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDrinks();
    },[searchTerm]);

    return <AppContext.Provider value={{loading,setSearchTerm,cocktails}}> {  children } </AppContext.Provider>
    
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };