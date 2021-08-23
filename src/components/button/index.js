import React, { Component } from 'react'
import {ButtonComponent, propTypes} from './styled'
import PropTypes from 'prop-types'

const  Button = (props) => { 
  
       return (
           <ButtonComponent onClick={props.press} text={`${props.text}`} color={props.color} >{props.text}</ButtonComponent>
       );
}

export default Button;
