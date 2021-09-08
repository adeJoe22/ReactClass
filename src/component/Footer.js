import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (

            <FooterContainer>
                
                <TC>
                    <div>Terms</div>
                    <div>Privacy Policy</div>
                    <div>EULA</div>
                    <div>Release Notes</div>
                </TC>
                <Rights>© 2021 GitHub, Inc. All rights reserved</Rights>
            </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 220px;
    margin-top: 120px;
    margin-bottom: 10px;
`



const TC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    width: 500px;
    color: #A900ff;
    position:relative;
    

    :before{
        content: " ";
        position: absolute;
        width: 35%;
        height: 2px;
        background-color: grey;
        top: -30px;
        left: 160px;

    }
`

const Rights = styled.p`
    color: rgb(61, 51, 51);
    margin-bottom: 60px;
`