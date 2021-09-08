import React from 'react'
import styled from "styled-components"
import img from "./img6.png";
import img2 from "./img8.jpg";
import img3 from "./img9.jpg"

const  MyComp = ({paragraph, title, img, chng, clr}) => {
    return (
        <Container chng={chng}>
            <Image src={img}/>
            <Wrapper>
            <Title clr={clr}>{title}</Title>
                <p>{paragraph}</p>
            </Wrapper>
        </Container>
    )
}

export default MyComp

const Container = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 65px 300px;
    flex-direction: ${({chng}) => chng ? "row-reverse" : "row"};
    align-items: center;
`

const Image = styled.img`
    width: 400px;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
`

const Wrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    color: grey;
    font-weight: 300;
`

const Title = styled.h4`
    text-transform : uppercase;
    color: ${({clr})=> clr ? "red" : "white"};
    font-weight: 300;
`

