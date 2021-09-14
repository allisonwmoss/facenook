import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    font-size: 1.3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    background-color: #eb0081;
`

const StyledButton = styled.div`
    background-image: url('https://i.imgur.com/7vA2Zt8.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
    font-size: 1em;
    height: 70px;
    width: 70px;
    margin: 5px;
    border-radius: 50%;
    color: white;
    &:hover{
        background-color: #5ce1e6;
        transition: 0.1s ease-in;
    }
`

const StyledInput = styled.input`
    height: 2em;
    width: 50%;
    margin: 5px;
    font-size: 0.9em;
    border: 1px solid white;
`

export default function SearchForm(props) {
    const setSearchString = props.setSearchString
    const [waitSearchString, setWaitSearchString] = useState('')

    function handleChange(e) {
        setWaitSearchString(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setSearchString(waitSearchString)
    }
    return (
        <StyledForm onSubmit={e => handleSubmit(e)}>
            <StyledInput
                type="text" value={waitSearchString} placeholder='Search for a villager...' onChange={e => handleChange(e)} id="search-input">

            </StyledInput>
            <StyledButton
                onClick={e => handleSubmit(e)}>
            </StyledButton>
        </StyledForm>

    )
}
