import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorDiv = styled.div`
background-color: #eb0081;
padding: 250px 100px;
`

export default function Error(props) {
    const LinkStyle = {
        color: 'white',
        textDecoration: 'underline',
    }
    const reason = props.reason
    if (reason === "no-match") {
        return (
            <ErrorDiv>
                <h2>Sorry, we didn't find a villager with that name.</h2>
                <Link style={LinkStyle} to="/error">
                    <h2>Click here to try again.</h2>
                </Link>
            </ErrorDiv>
        )
    }
    return (
        <ErrorDiv>
            <h1>Uh-oh, something went wrong.</h1>
            <Link style={LinkStyle} to="/error">
                <h2>Click here to go back home.</h2>
            </Link>
        </ErrorDiv>
    )
}