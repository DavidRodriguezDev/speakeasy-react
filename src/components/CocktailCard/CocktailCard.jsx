import React from 'react'
import "./CocktailCard.scss"

const CocktailCard = ({cocktail}) => {
  return (
    <div className='b-cocktailcard__container'>
        <div className='b-cocktailcard__name'>
            <h2>{cocktail.name.toUpperCase()}</h2>
        </div>
        <div className="b-cocktailcard__img">
            <img className='b-cocktailcard__img--photo' src={cocktail.photo} alt={cocktail.name}></img>
        </div>
        
    </div>
  )
}

export default CocktailCard