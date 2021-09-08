import React from 'react'
import styled from "styled-components"
import logo from "./landing-logo.png"

const DapiFooter = () => {
    return (
        <Container>              
        <Logo src={logo}/>
        <WrapperTerms>
            <DapiTerms>
                <span>Github</span>
                <span>.</span>
                <span>Twitter</span>
                <span>.</span>
                <span>Changelog</span>
                <span>.</span>
                <span>Pricing</span>
                <span>.</span>
                <span>Contact</span>
                <span>.</span>
                <span>Private Privacy</span>
            </DapiTerms>
        </WrapperTerms>
        </Container>
      
    )
}

export default DapiFooter

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    padding-top: 70px;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`

const WrapperTerms = styled.div`
    width: 800px;
    height: 150px;
    padding-top:40px;
`
const DapiTerms = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    color: grey;
    font-size: 20px
    

`
