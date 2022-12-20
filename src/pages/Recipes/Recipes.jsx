import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CocktailCard from '../../components/CocktailCard/CocktailCard'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import "./Recipes.scss"

const Recipes = () => {
  
  const [cocktails, setCocktails] = useState([]);
  const [cocktailsFiltered, setCocktailsFiltered] = useState([]);
  const [showName, setShowName] = useState("name");

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get("http://localhost:3040/cocktails")
      setCocktails([...data]);
      setCocktailsFiltered([...data]);
    }
    getData()
  }, [])

  const searchCocktails = (text) => {
      let filtered = [];
      if (showName === "name") filtered = cocktails.filter((cocktail) => cocktail.name.toLowerCase().includes(text.toLowerCase()));
      else if(showName === "glass") filtered = cocktails.filter((cocktail) => cocktail.glass.toLowerCase().includes(text.toLowerCase()));
      else if (showName === "ice") filtered = cocktails.filter((cocktail) => cocktail.ice.toLowerCase().includes(text.toLowerCase()));
      else if (showName === "method") filtered = cocktails.filter((cocktail) => cocktail.method.toLowerCase().includes(text.toLowerCase())); 
      setCocktailsFiltered(filtered);
  }

  return (
    <div className='b-recipes__container'> 
      <div className='b-recipes__header'>
        <h1 className="b-recipes__title">COCKTAILS</h1>
        <h5 className="b-recipes__moment">Ahora que ya sabe la historia de cada destilado, cree un momento como ningún otro con su cocktail favorito y haga de cualquier momento uno para recordar.</h5>
        <div className='b-recipes__filters'>
          <h5 className= {`b-recipes__links ${showName === "name" ? "dark" : ""}`} onClick={() => setShowName("name")}>NOMBRE</h5>
          <h5 className={`b-recipes__links ${showName === "glass" ? "dark" : ""}`} onClick={() => setShowName("glass")}>VASO</h5>
          <h5 className={`b-recipes__links ${showName === "ice" ? "dark" : ""}`} onClick={() => setShowName("ice")}>HIELO</h5>
          <h5 className={`b-recipes__links ${showName === "method" ? "dark" : ""}`} onClick={() => setShowName("method")}>MÉTODO</h5>
        </div>
        <Search setSearch={searchCocktails}></Search>
      </div>
       
      <div className='b-recipes__card'>       
          {cocktailsFiltered.map((cocktail) => {
            return  <CocktailCard key={cocktail._id} cocktail={cocktail}></CocktailCard>
                    
          })}  
      </div>        
      <div  className='b-position-nav'>
        <NavBar></NavBar>
      </div> 
    </div>
    
  )
}

export default Recipes