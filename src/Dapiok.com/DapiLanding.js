import React from 'react';
import styled from "styled-components";
import mainshot from "./mainshot.png"

const DapiLanding = () => {
    return (
        <Container>
            <Heading>
                Design, Preview and Track the 
                API with the team
            </Heading>
            <Description>
                Dapi helps streamline API integration for the dev team. OpenAPI, sequence diagram,
                API document site and mock server. It aims for faster integration and better tracking
            </Description>
            <TryFree>Try FREE Now</TryFree>
            <Mainshot src={mainshot}/>
        </Container>
    )
}

export default DapiLanding

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 1600px;
`

const Heading = styled.div`
    font-size: 80px;
    font-weight: bold;
    width: 75%;
    height: 180px;
    text-align: center;
    margin-top: 140px;
    padding-top: 50px;
    line-height: 85px;
`

const Description = styled.div`
    width: 75%;
    text-align: center;
    font-size: 27px;
    color: grey;
    margin-top: -90px;
    height: 90px;
    line-height: 40px;
`

const TryFree = styled.button`
    width: 400px;
    border-radius: 10px;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border: 3px solid transparent;
    background: linear-gradient(#000, #000) padding-box,
                linear-gradient(to right, #0A0F9A, #880068) border-box;
    margin-bottom: 60px;
    
`
const Mainshot = styled.img`
    width: 1300px;
    height: 700px;
    // margin-top: 40px;
`


