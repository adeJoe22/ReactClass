import React from 'react';
import OurSlider from "./ourSlider";
import styled from "styled-components"
import Header from "./header"
import HeaderNav from "../routerStudy/headerNav";
import UiCard from "../component/uiCard"
import CompButton from './compButton';

const HomeScreen = () => {
    return (
        <>
           <Container>
               {/* <HeaderNav/> */}
               {/* <UiCard/> */}
                <Header/>
                <OurSlider/>
                

           </Container>
          
           
        
        </>
    )
}

export default HomeScreen

const Container = styled.div`
    width: 80%;
    margin: auto;
`