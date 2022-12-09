import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { loginUser} from '../../redux/auth.actions';
import "./Login.scss"

const Login = () => {

  const {register, handleSubmit, formState : {errors}} = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const send = (formdata) => {
    dispatch(loginUser(formdata, navigate));
  }

  return (
    <div className='b-login__container'>
      <h1 className='b-title'>NEW YORK´S SPEAKEASY</h1>
      <form className='b-login__form' onSubmit={handleSubmit(send)}>
        <label className='b-login__label'>Email Usuario</label>
        <input className='b-login__input' type="text" placeholder='Email Usuario' {...register("email",
          {required : "El email no puede ser vacío",
          pattern : {
            message : "El email no tiene el formato correcto",
            value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }}
        )}></input>
         <div className='b-errors__container'>
            {errors.email && <>
              {errors.email.type === "required" && <p className='b-login__error'>{errors.email.message}</p>}
              {errors.email.type === "pattern" && <p className='b-login__error'>{errors.email.message}</p>}
            </>}
          </div>
          <label className='b-login__label'>Contraseña</label>
            <input className='b-login__input' type="password" placeholder='Contraseña' {...register("password", {
              required : "La contraseña no puede ser vacía",
              pattern : 
              {
                message : "La contraseña tiene que tener un formato correcto.",
                pattern :  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
              }
            })}/>
            <div className='b-errors__container'>
            {errors.password && <>
              {errors.password.type === "required" && <p className='b-login__error'>{errors.password.message}</p>}
              {errors.password.type === "pattern" && <p className='b-login__error'>{errors.password.message}</p>}
            </>}
            </div>
        <Button className="b-login__form___button" text="Comenzar"></Button>
      </form>
      <div className='b-login-recover'>
        <p>¿No puedes iniciar sesión? <NavLink style={{ textDecoration: 'none' }} to={'/gin'}><span className='b-login__span'>Restablecer contraseña</span></NavLink></p>
      </div>
      <h5>O</h5>
      <div className='b-login__create'>
        <NavLink style={{ textDecoration: 'none' }} to={'/register'}><p className='b-login__count'>Crear cuenta</p></NavLink>
      </div>   
    </div>
  )
}

export default Login