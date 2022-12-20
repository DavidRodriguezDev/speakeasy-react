import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import "./DetailCocktail.scss"

const DetailCocktail = () => {

    const {idCocktail} = useParams();
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        const getCocktail = async () => {
            const {data} = await axios.get(`http://localhost:3040/cocktails/${idCocktail}`);
            setCocktail(data);
            console.log(data);
        }
        getCocktail()
    }, [idCocktail])

  return (
    <div className='b-detailcocktail__container'>
      <div className='b-register-header'>
          <BackButton src="../../assets/left.png"></BackButton>
          <h1 className='b-title'>CHICAGO´S SPEAKEASY</h1>
          <h3 className='b-opacity'>0</h3>
        </div>  
        
        
        <h1>{cocktail.name}</h1>
        <h1>{cocktail.glass}</h1>
        <h1>{cocktail.ice}</h1>
        <h1>{cocktail.method}</h1>  
    </div>
  )
}

export default DetailCocktail