import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CocktailCard from '../../components/CocktailCard/CocktailCard'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import "./Recipes.scss"

const Recipes = () => {
  
  const [cocktails, setCocktails] = useState([]);
  const [showName, setShowName] = useState("name")


  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get("http://localhost:3040/cocktails")
      setCocktails([...data])
      console.log(data);
    }
    getData()
  }, [])

  return (
    <div className='b-recipes__container'> 
      <div className='b-recipes__header'>

        <Search></Search>
        <div className='b-recipes__filters'>
          <h5 className= {`b-recipes-links ${showName === "name" ? "dark" : ""}`} onClick={() => setShowName("name")}>Nombre</h5>
          <h5 className={`b-recipes-links ${showName === "location" ? "dark" : ""}`} onClick={() => setShowName("method")}>Destilado Principal</h5>
          <h5 className={`b-recipes-links ${showName === "job" ? "dark" : ""}`} onClick={() => setShowName("ingredients.mainIngredient")}>Método de Elaboración</h5>
        </div> 
      </div>
       
      <div className='b-recipes__card'>       
          {cocktails.map((cocktail) => {
            return <div key={cocktail._id}><CocktailCard cocktail={cocktail}></CocktailCard></div>
          })}  
      </div>        
      <div  className='b-position-nav'>
        <NavBar></NavBar>
      </div> 
    </div>
    
  )
}

export default Recipes