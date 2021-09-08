import React from 'react'
import styled from "styled-components"

const CompButton = () => {
    return (
        <ButtonContainer>
            <Button>See what's been built</Button>
        </ButtonContainer>
       
    )
}

export default CompButton

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
display: flex;
width: 320px;
height: 80px;
background-color: #222222;
border: 2px grey solid;
align-items: center;
color: white;
justify-content: center;
border-radius: 5px;
font-size: 22px;
letter-spacing: 1.2px;
margin-top: 40px;

:hover{
    cursor: pointer;
    color: black;
    background-color: white;
    border: 2px white solid;
    transform-origin: right;
    transition: background-color 950ms ease-in;
}
`
