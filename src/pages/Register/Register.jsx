import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import { registerUser } from '../../redux/auth.actions';
import "./Register.scss"

const Register = () => {

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const {register, handleSubmit, formState : {errors}} = useForm();

  const send = (formdata) => {
    dispatch(registerUser(formdata, navigate));
  }

  return (
    
      <div className='b-register__container'>
        <div className='b-register-header'>
        <BackButton src="../../assets/back.svg"></BackButton>
        <h1 className='b-title'>NEW YORK´S SPEAKEASY</h1>
        <h3 className='b-opacity'>0</h3>
      </div>
        <form className='b-register__form' onSubmit={handleSubmit(send)}>
          <label className='b-register__label'>Nombre Usuario</label>
          <input className='b-register__input--sec' type="text" placeholder='Nombre de usuario' {...register("name")}></input>
          <label className='b-register__label'>Email Usuario</label>
          <input className='b-register__input' type="text" placeholder='Email Usuario' {...register("email",
            {required : "El email no puede ser vacío",
            pattern : {
              message : "El email no tiene el formato correcto",
              value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }}
          )}></input>
           <div className='b-errors__container'>
              {errors.email && <>
                {errors.email.type === "required" && <p className='b-register__error'>{errors.email.message}</p>}
                {errors.email.type === "pattern" && <p className='b-register__error'>{errors.email.message}</p>}
              </>}
            </div>
            <label className='b-login__label'>Contraseña</label>
              <input className='b-register__input' type="password" placeholder='Contraseña' {...register("password", {
                required : "La contraseña no puede ser vacía",
                pattern : 
                {
                  message : "La contraseña tiene que tener un formato correcto.",
                  pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
                }
              })}/>
              <div className='b-errors__container'>
              {errors.password && <>
                {errors.password.type === "required" && <p className='b-register__error'>{errors.password.message}</p>}
                {errors.password.type === "pattern" && <p className='b-register__error'>{errors.password.message}</p>}
              </>}
              </div>
            <div className='b-register__checkbox'>  
              <input type="checkbox" {...register("check", {required : true})}></input><p className='b-register__checked'>Al resgistrar una cuenta usted reconoce tener la edad legal para el consumo de bebidas alcohólicas en tu país. Por favor no compartas este contenido a personas menores de edad.</p>
            </div>
          <Button className="b-register__form___button" text="Registrar"></Button>
        </form>
      </div>
    )
  }
  

export default Register