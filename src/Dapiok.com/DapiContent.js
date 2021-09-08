import React from 'react';
import styled from "styled-components";
import designImage from "./design-section.png";
import previewImage from "./preview-section.png";
import trackImage from "./track-section.png";

const DapiContent = () => {
    return (
        <Container>
            <DesignHolder>
                <Design>Design</Design>
                <DesignText>
                    More than just editing an openAPI doc, you can define the model relationship,
                    draw sequence diagram to understand better the logic behind each API
                </DesignText>
                <DesignImage src={designImage}/>
            </DesignHolder>
           <PreviewHolder>
               <Preview>Preview</Preview>
               <PreviewText>
                    Deploy a password-protected API doc site and mock API server whenever you want.
                    Let others in the team to do the integration and review before the API is ready
               </PreviewText>
               <PreviewImage src={previewImage}/>
           </PreviewHolder>
           <TrackHolder>
                <Track>Track</Track>
                <TrackText>
                    Follow the updates and always keeping everybody aligned on the latest API.
                    Review the API designing before the performance issue happens.
                </TrackText>
                <TrackImage src={trackImage}/>
           </TrackHolder>

        </Container>
    )
}

export default DapiContent

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4000px;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;

`

const DesignHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 1300px;
    height: 1100px;
    position: relative;

    :before{
        content: " ";
        position: absolute;
        width: 3px;
        height: 100px;
        top: -5px;
        background-color: grey;
    }
`
const Design = styled.div`
    font-size: 80px;
    font-weight: bold;
    heigth: 100px;
    width: 300px;
    margin-top: 100px;
    padding-top: 50px;
    background-image: linear-gradient(to right top, #4312b4, #ff91e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    color: #464646;
`
const DesignText = styled.div`
    text-align: center;
    font-size: 27px;
    color: grey;
    width: 85%;
    height: 90px;
    line-height: 40px;
    margin-bottom: 60px;
    padding-bottom: 40px;
`
const DesignImage = styled.img`
    width: 1200px;
    height:700px;
`

const PreviewHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 1300px;
    height: 1100px;
    position: relative;

    :before{
        content: " ";
        position: absolute;
        width: 3px;
        height: 100px;
        top: 2px;
        background-color: grey;
    }
`
const Preview = styled.div`
    font-size: 80px;
    font-weight: bold;
    heigth: 100px;
    width: 400px;
    margin-top: 100px;
    padding-top: 50px;
    background-image: linear-gradient(to right top , #51bea3, #3c18be);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    color: #464646;
`
const PreviewText = styled.div`
    text-align: center;
    font-size: 27px;
    color: grey;
    width: 90%;
    height: 90px;
    line-height: 40px;
    margin-bottom: 70px;
    padding-bottom: 40px;
`
const PreviewImage = styled.img`
width: 1200px;
height:700px;
`

const TrackHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 1300px;
    height: 1200px;
    position: relative;

    :before{
        content: " ";
        position: absolute;
        width: 3px;
        height: 100px;
        top: 2px;
        background-color: grey;
    }
`
const Track = styled.div`
    font-size: 80px;
    font-weight: bold;
    heigth: 100px;
    width: 300px;
    background-color: red;
    margin-top: 100px;
    padding-top: 50px;
    background-image: linear-gradient(to right top, #c5892e, #ff521d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    color: #464646;
`
const TrackText = styled.div`
    text-align: center;
    font-size: 27px;
    color: grey;
    width: 85%;
    height: 90px;
    line-height: 40px;
    margin-bottom: 60px;
    padding-bottom: 40px;
`
const TrackImage = styled.img`
width: 1000px;
height:700px;
`





