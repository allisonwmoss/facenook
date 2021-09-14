import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    background-color: #003413;
    color: white;
    margin: 0;
    padding: 10px 30px;
    font-size: 1.7em;
    width: 100%;
`

const HeaderLogo = styled.div`
width: 150px;
height: 150px;
max-height: 400px;
color: #003413;
background-image: url("https://i.imgur.com/286VAPQ.png");
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.55em;
border: 5px solid transparent;
border-radius: 50%;
&:hover{
        transition: 0.1s ease-in;
        background-image: url("https://i.imgur.com/lnrCkrf.png");
        color: white;
    }
`

export default function Header() {
    return (
        <Link to={'/redirect'}>
            <HeaderDiv>
                <HeaderLogo>
                    <h1>facenook</h1>
                </HeaderLogo>
            </HeaderDiv>
        </Link>

    )
}