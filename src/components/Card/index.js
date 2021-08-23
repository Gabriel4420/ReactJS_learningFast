import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { CardComponent, ImageComponent, ImageContent , Text} from './styles';

export default class Card extends Component { 
    static defaultProps = {
        imagem:'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg',
        paragraph:'Habilidades para o presente (e seu futuro). Comece agora conosco.',
        title:'udemy'
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        paragraph:PropTypes.string,
        imagem:PropTypes.string,
        color:PropTypes.string
    }
   render() {
       return (
          <CardComponent color={this.props.color}>
              <ImageComponent>
                    <ImageContent src={this.props.imagem}/>
              </ImageComponent>
              <h2 title={this.props.title}>{this.props.title}</h2>
              <Text>
                  {this.props.paragraph}
              </Text>
          </CardComponent>
       )
   }
}
