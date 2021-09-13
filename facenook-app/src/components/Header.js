import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    background-color: #003413;
    color: white;
    margin: 0;
    padding: 10px 30px;
    font-size: 1.7em;
`

const Img = styled.img`
width: 30%;
height: 50%;
padding: 5px;
`

export default function Header() {
    return (
        <HeaderDiv>
            <h1>facenook</h1>
            <Img src="https://lh4.googleusercontent.com/proxy/P_I1uVkx3sOaNlJWO8R7JsaX3uCkWJlhQ85phwR7deKrCXFIyBxVBIFjkWuYq2n0_LwE9AKekkrVGF0nT4Vex41AbA=s0-d" />
        </HeaderDiv>
    )
}