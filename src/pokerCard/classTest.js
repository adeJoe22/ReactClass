import React from 'react'
import styled from "styled-components"

const  ClassTest = () => {
    return (
        <Container>
            <InputTag>
                <Avatar></Avatar>
                <Name></Name>
                <Quotes></Quotes>
            </InputTag>
            <CardHolder>
                <Card>
                    <Delete></Delete>
                    <PicturePost></PicturePost>
                    <NamePost></NamePost>
                    <QoutePost></QoutePost>
                    <TimePost></TimePost>
                </Card>
            </CardHolder>
        </Container>
    )
}

export default ClassTest

const Container = styled.div`

    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
`
const InputTag = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 300px;
    background-color: yellow;
    justify-content: space-around;
    align-items: center;
    
`

const Avatar = styled.img``
const Name = styled.div``
const Quotes = styled.div``


const CardHolder= styled.div`
    display: flex;
    width: 60%;
    height: 400px;
    background-color: blue;

`
const Card = styled.div`
    width: 220px;
    height: 320px;
    background-color: black;
    display: flex;
    justify=content: space-around;
    align-items: center
    flex-direction: column;
    border: grey 2px solid;
    border-radius: 10px;

`
const Delete = styled.img`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: red;
`
const PicturePost = styled.img`
border-radius: 100px;
width: 120px;
height: 120px;
border: whitesmoke 5px solid;
`
const NamePost = styled.div`
    font-size: 18px;
    color: white;
`
const QoutePost = styled.div`
    text-align: center;
    width: 200px;
    font-size: 18px;
    color: white;

`
const TimePost = styled.div`
    width: 200px;
    font-size: 14px;
    color: white;
`