import React from 'react'
import styled from "styled-components";


const DapiReady = () => {
    return (
        <Container>
            <Ready>Ready to work on your API?</Ready>
            <ReadyText>
                Dapi keeps everyone in the dev team aligned. Backend, Frontend
                and PM, collaborative working in one platform
            </ReadyText>
            <WrapperBtn>
                <ReadyTry>Try FREE Now</ReadyTry>
            </WrapperBtn>
            

        </Container>
    )
}

export default DapiReady

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 380px;
    justify-content: center;
    align-items: center;
    margin-top: 200px
`

const Ready = styled.div`
    font-size: 80px;
    font-weight: bold;
    heigth: 70px;
    width: 1200px;
    margin-top: 80px;
    padding-top: 80px;
`

const ReadyText = styled.div`
    text-align: center;
    font-size: 27px;
    color: grey;
    width: 60%;
    height: 90px;
    line-height: 40px;
    margin-bottom: 100px;
    padding-bottom: 100px;
`

const WrapperBtn = styled.div`
    display: flex;
    width: 400px;
    height: 80px;
    margin-bottom: 150px;
    padding-bottom: 100px
`

const ReadyTry = styled.button`
    width: 400px;
    border-radius: 10px;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background-color: rgb(55, 140, 252);
    border: none;
    margin-bottom: 70px;
    
`




