import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import "./DetailCocktail.scss"

const DetailCocktail = () => {

    const {idCocktail} = useParams();
    const [cocktail, setCocktail] = useState([]);
    const user = JSON.parse(localStorage.getItem('user')).name;

    useEffect(() => {
        const getCocktail = async () => {
            const {data} = await axios.get(`http://localhost:3040/cocktails/${idCocktail}`);
            setCocktail(data);

        }
        getCocktail()
    }, [idCocktail])


  return (
    <div className='b-detailcocktail__container'>
        <div className='b-detailcocktail__header'>
            <BackButton src="../../assets/left.png"></BackButton>
            <h1 className='b-title'>CHICAGO´S SPEAKEASY</h1>
            <h3 className='b-opacity'>0</h3>
        </div>  
        <div className='b-detailcocktail__info'>
            <div className='b-detailcocktail__image--container'>
                <img className='b-detailcocktail__image' src={cocktail.photo} alt={cocktail.name}></img>
            </div>
            <div className='b-detailcocktail__text'>
                <h2 className='b-detailcocktail__title'>{cocktail.name}</h2>
                <div className='b-detailcocktail__mixologist__container'>
                    <h3 className='b-detailcocktail__mixologist'>MIXOLOGIST :</h3>
                    <h3 className='b-detailcocktail__mixologist--name'>{user}</h3>
                </div>       
            </div>
            <div className='b-detailcocktail__method--container'>
                <h3 className='b-detailcocktail__method'>MÉTODO DE ELABORACIÓN : </h3>
                <h5 className='b-detailcocktail__method--sec'>{cocktail.method}</h5>
            </div>
            <div className='b-detailcocktail__ingredients'>
                <h3>INGREDIENTS :</h3>
                
            </div>
        </div>
        
    </div>
  )
}

export default DetailCocktail