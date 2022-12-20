import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/auth.actions'
import { UserContext } from '../../shared/contexts/UserContext'
import './NavBar.scss'

const NavBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (

    <UserContext.Provider value={{token, setToken}}>
      <div className='b-navbar'>
        <div className='b-complete-icon' onClick={() => navigate("/")}>
          <img  className='b-icon' src='/assets/home.svg' alt="Casa"></img>
          <small className='b-span-icon'>HOME</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("/gin")}>
          <img  className='b-icon' src='/assets/gin.svg' alt="Gin"></img>
          <small className='b-span-icon'>GIN</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("rum")}>
          <img  className='b-icon' src='/assets/rum.svg' alt=""></img>
          <small className='b-span-icon'>RUM</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("/tequila")}>
          <img  className='b-icon' src='/assets/tequila.svg' alt=""></img>
          <small className='b-span-icon'>TEQUILA</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("/vodka")}>
          <img  className='b-icon' src='/assets/vodka.svg' alt=""></img>
          <small className='b-span-icon'>VODKA</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("/whisky")}>
          <img  className='b-icon' src='/assets/whisky.svg' alt=""></img>
          <small className='b-span-icon'>WHISKY</small>
        </div>
        <div className='b-complete-icon' onClick={() => navigate("/recipes")}>
          <img  className='b-icon' src='/assets/recipes.svg' alt=""></img>
          <small className='b-span-icon'>COCKTAILS</small>
        </div>
        {token ? <div className='b-complete-icon' onClick={() => dispatch(logOut(navigate))}>
                    <img  className='b-icon' src='/assets/out.svg' alt=""></img>
                    <small className='b-span-icon'>LOGOUT</small>
                   </div>
                : <div className='b-complete-icon' onClick={() => navigate("/login")}>
                    <img  className='b-icon' src='/assets/login.svg' alt=""></img>
                    <small className='b-span-icon'>Log in</small>
                   </div>
        }  
          
      </div>
    </UserContext.Provider>
  )
}

export default NavBar