import styled from 'styled-components';
import PropTypes from 'prop-types';



export const ButtonComponent = styled.button`
height:40px;
background-color:${props => props.color || "palevioletred"};
color:white;
border:1px solid white;
margin-left:85px;
margin-right:85px;
cursor:pointer;
:hover{
    background-color:#2B86ED;
}

`