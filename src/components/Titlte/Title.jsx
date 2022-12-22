import React from 'react'
import "./Title.scss"

const Title = ({text}) => {
  return (
    <h1 className='b-component__title'>{text}</h1>
  )
}

export default Title