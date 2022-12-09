import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
        <h1 className='b-title'>NEW YORK´S SPEAKEASY</h1>
        <form className='b-register__form' onSubmit={handleSubmit(send)}>
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
          <Button className="b-register__form___button" text="Registrar"></Button>
        </form>
      </div>
    )
  }
  

export default Register