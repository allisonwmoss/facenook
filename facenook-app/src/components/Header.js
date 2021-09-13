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

// const HeaderLogo = styled.div`
// max-width: 200px;
// min-width: 100px;
// margin: 0px 50px;
// padding: 5px;
// background-image: url("https://i.imgur.com/286VAPQ.png");
// `

const Img = styled.img`
max-width: 200px;
margin: 0px 50px;
padding: 5px;
`

export default function Header() {
    return (
        <Link to={'/redirect'}>
            <HeaderDiv>
                {/* <HeaderLogo>facenook</HeaderLogo> */}
                <h1>facenook</h1>
                <Img src="https://i.imgur.com/286VAPQ.png" />
            </HeaderDiv>
        </Link>

    )
}