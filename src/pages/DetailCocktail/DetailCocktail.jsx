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
            localStorage.setItem("info", JSON.stringify(data.ingredients[0]));
            localStorage.setItem("mainIngredient", JSON.stringify(data.ingredients[0].mainIngredient));
            localStorage.setItem("measures", JSON.stringify(data.ingredients[0].measures));
            localStorage.setItem("restIngredients", JSON.stringify(data.ingredients[0].restIngredients));
            setCocktail(data);
        }  
        getCocktail() 
    }, [])

    const mainIngredient = JSON.parse(localStorage.getItem("mainIngredient"));
    const restIngredients = JSON.parse(localStorage.getItem("restIngredients"));
    const measures = JSON.parse(localStorage.getItem("measures"));

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
            <div className='b-detailcocktail__spects--container'>
                <h3 className='b-detailcocktail__spects'>MÉTODO DE ELABORACIÓN : </h3>
                <h5 className='b-detailcocktail__spects--sec'>{cocktail.method}</h5>
                <h3 className='b-detailcocktail__spects'>HIELO : </h3>
                <h5 className='b-detailcocktail__spects--sec'>{cocktail.ice}</h5>
                <h3 className='b-detailcocktail__spects'>TIPO DE VASO : </h3>
                <h5 className='b-detailcocktail__spects--sec'>{cocktail.glass}</h5>
                <h3 className='b-detailcocktail__spects'>DECORACIÓN : </h3>
                <h5 className='b-detailcocktail__spects--sec'>{cocktail.decoration}</h5>
            </div>
            <h3>INGREDIENTS :</h3> 
            <div className='b-detailcocktail__ingredients--container'>  
                <div className='b-detailcocktail__ingredients'>
                    <h3 className='b-detailcocktail__main'>{mainIngredient}</h3>
                        {restIngredients.map((ingredient, index) => <h4 key={index}>{ingredient}</h4>)}
                </div>
                <div className='b-detailcocktail__measures'>
                    {measures.map((measure, index) => <h4 key={index}>{measure}</h4>)}
                </div>
            </div>
        </div> 
        
    </div>
  )
}

export default DetailCocktail