import styled from 'styled-components';

export const CardComponent = styled.div `
    height:50vh;
    width:100%;
    max-width: 250px;
    background-color:${props => props.color || "palevioletred"};
    display: flex;
    flex-direction: column;
    padding: 15px;
    font-family: 'Courier New', Courier, monospace;
    border-top-right-radius:80px;
    border-top-left-radius:80px;
    border-bottom-right-radius:80px;
    border-bottom-left-radius:80px;
    margin-left:10px;

    h2{
        text-align:center;
        font-size:20px;
        color:white;
    }
    
`;
export const ImageComponent = styled.div `
max-width:100px;
width:100%;
display: flex;
margin-left: 80px;


img{
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    
}

`

export const ImageContent = styled.img`
display:flex;
    align-items: center;
    justify-content: center;
    

`

export const Text = styled.p`
    font-size: 15px;
    color:white;
    font-family: Arial, Helvetica, sans-serif;
`