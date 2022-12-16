import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/auth.actions'
import './NavBar.scss'

const NavBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='b-navbar'>
      <div className='b-complete-icon' onClick={() => navigate("/")}>
        <img  className='b-icon' src='/assets/home.svg' alt="Casa"></img>
        <small className='b-span-icon'>Home</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/gin")}>
        <img  className='b-icon' src='/assets/gin.svg' alt="Gin"></img>
        <small className='b-span-icon'>Gin</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("rum")}>
        <img  className='b-icon' src='/assets/rum.svg' alt=""></img>
        <small className='b-span-icon'>Rum</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/tequila")}>
        <img  className='b-icon' src='/assets/tequila.svg' alt=""></img>
        <small className='b-span-icon'>Tequila</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/vodka")}>
        <img  className='b-icon' src='/assets/vodka.svg' alt=""></img>
        <small className='b-span-icon'>Vodka</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/whisky")}>
        <img  className='b-icon' src='/assets/whisky.svg' alt=""></img>
        <small className='b-span-icon'>Whisky</small>
      </div>
      <div className='b-complete-icon' onClick={() => navigate("/recipes")}>
        <img  className='b-icon' src='/assets/recipes.svg' alt=""></img>
        <small className='b-span-icon'>Recipes</small>
      </div>
      <div className='b-complete-icon' onClick={() => dispatch(logOut(navigate))}>
        <img  className='b-icon' src='/assets/out.svg' alt=""></img>
        <small className='b-span-icon'>Log out</small>
      </div>
    </div>
  )
}

export default NavBar