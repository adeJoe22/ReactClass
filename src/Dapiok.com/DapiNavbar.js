import React from 'react';
import styled from "styled-components";
import logo from "./landing-logo.png";


const DapiNavbar = () => {
    return (
       <Container>
           <Navs>
                <Logo src={logo}/>
                <LogoName>Dapi</LogoName>
                <Wrapper>
                    <Links>
                            <span>Changelog</span>
                    </Links>
                    <Links>
                            <span>Pricing</span>
                    </Links>
                    <Links>
                            <span>Contact</span>
                    </Links>
                </Wrapper>
           </Navs>

           <Logs>
               <Login>Login</Login>
               <SignUp>Sign Up</SignUp>
           </Logs>
       </Container>
    )
}

export default DapiNavbar

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    // background-color: rgba(6, 6, 6, 0.6);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(5px);
    
`
const Navs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 25px;
`

const Logo = styled.img`
    padding-left: 20px;
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 10px;
`
const LogoName = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-right: 40px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;

`
const Links = styled.div`
    span{
        font-size: 18px;
        color: rgba(255, 255, 255, 0.8);
        transform: scale(1.0);
    }
    :hover{
        span{
            cursor: pointer;            
            transform: scaleX(1.04);
            color: rgba(55, 140, 252, 0.8);
            transition: all 350ms;
            transform: scale(1.05);
        }
    }
`

const Logs = styled.div`
    display: flex;
    width: 200px;
    height: 42px;
    justify-content: space-between;
    margin-right: 40px;
    align-items: center;
`
const Login = styled.div`
    color: rgb(55, 140, 252);
    font-size: 18px;
    transform: scale(1.0);

    :hover{
        transition: all 350ms;
        transform: scale(1.05);
        cursor: pointer;
    }
`
const SignUp = styled.button`
    background-color: rgb(55, 140, 252);
    width: 120px;
    font-size: 18px;
    height: 35px;
    border-radius: 5px;
    border: none;
    color: white;

    :hover{
        SignUp{
            transition: all 350ms;
            transform: scale(1.05);
            cursor: pointer;
        }
    }
`


