import React from 'react'
import styled from 'styled-components'
import img from "./logo.svg"

const HeaderNav = () => {
    return (
        <Container>
            <Logo src={img}/>
            <Wrapper>
                <NavLink>
                    <span>Home</span>
                </NavLink>                
                <NavLink>
                    <span>Home</span>
                </NavLink>
                <NavLink>
                    <span>Home</span>
                </NavLink>
                <NavLink>
                    <span>Home</span>
                </NavLink>
            </Wrapper>
            <AvatarLink>
                <Avatar>P</Avatar>
                <a onClick={ ()=>{
                    console.log("You're now logged out!")
                }}>LogOut</a>
            </AvatarLink>
            
        </Container>
    )
}

export default HeaderNav

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #1e3253;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    padding-left: 20px;
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 60px
`

const Wrapper = styled.div`
    flex: 1;
    display: flex;
`

const NavLink = styled.div`
    span{
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        position: relative;
        color: rgba(255, 255, 255, 0.8);

        :after{
            content: "";
            height: 2px;
            position: absolute;
            bottom: -4px;
            left: 0;
            background-color: white;
            width: 100%;
            opacity: 0;
            transition: all 350ms;
            transform: scaleX(0);
            tranform-origin: left;
        }
    }

    :hover{
        span{
            cursor: pointer;
            :after{
                opacity: 1;
                transform: scaleX(1.04)
            }
        }
    }


`

const Avatar = styled.div`
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font=weight: bold;
    font-size: 20px;
`

const AvatarLink = styled.div`
    a{
        display: none;
    }

    :hover{
        a{
            display: block;
            cursor: pointer;
            font-weight: bold;
        }
    }
`

// const Sign = styled.div``
