import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import "./Login.scss"

const Login = () => {

  const {register, handleSubmit, formState : {errors}} = useForm();

  const send = (formdata) => {
    console.log(formdata);
  }

  return (
    <div className='b-login__container'>
      <form onSubmit={handleSubmit(send)}>
        <label>Email Usuario</label>
        <input className='b-login__input' type="text" placeholder='Email Usuario' {...register("email",
          {required : "El email no puede ser vacío",
          pattern : {
            message : "El email no tiene el formato correcto",
            value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }}
        )}></input>
         <div className='b-errors__container'>
            {errors.email && <>
              {errors.email.type === "required" && <p className='b-login-error'>{errors.email.message}</p>}
              {errors.email.type === "pattern" && <p className='b-login-error'>{errors.email.message}</p>}
            </>}
          </div>
          <label>Contraseña</label>
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
              {errors.password.type === "required" && <p className='b-login-error'>{errors.password.message}</p>}
              {errors.password.type === "pattern" && <p className='b-login-error'>{errors.password.message}</p>}
            </>}
            </div>
        <button>Enviar</button>
      </form>
      <div className='b-login-create'>
        <NavLink style={{ textDecoration: 'none' }} to={'/register'}><p className='b-login-count'>Crear cuenta</p></NavLink>
      </div>   
    </div>
  )
}

export default Login