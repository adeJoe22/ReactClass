import React from 'react'
import styled from "styled-components"


const Highlight = ({img, desc, info}) => {
    return (
        <MainContainer>
            <Wrapper> 
                <Holder>
                    <Image src={img}/>
                    <Description>{desc}</Description>
                    <Info>{info}</Info>
                </Holder>
            </Wrapper>
        </MainContainer>
    )
}

export default Highlight

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 400px;
    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    align-items: center;
    margin-right: 30px;
    
`

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Image = styled.img`
    background-color: #A900ff;
    width: 70px;
    height: 80px;
    color: white;
`

const Description = styled.h4`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-weight: 300;

`

const Info = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 350px;
    margin-top: 20px;
    color: grey;
    font-weight: 300;
`