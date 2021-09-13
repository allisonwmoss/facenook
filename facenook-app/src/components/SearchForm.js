import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled.form`
    padding: 10px;
    font-size: 1.3em;
    display: flex;
    flex-direction: row;
    align-items:flex-end;
    justify-content:space-between;
`

const StyledButton = styled.button`
    background-color: #00adef;
    font-size: 1em;
    height: 1.3em;
    width: 20%;
    margin: 5px;
    color: white;
    border: 1px solid #00adef;
    border-radius: 8%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #eb0081;
    }
`

const StyledInput = styled.input`
    height: 1.8em;
    width: 75%;
    margin: 5px;
`

const StyledLabel = styled.label`
margin: 5px;
width: 20%;
`

export default function SearchForm(props) {
    const searchString = props.searchString
    const setSearchString = props.setSearchString
    const [waitSearchString, setWaitSearchString] = useState('')
    const villagers = props.villagers

    function handleChange(e) {
        setWaitSearchString(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        setSearchString(waitSearchString)
    }
    return (
        <StyledForm>
            <StyledLabel
                htmlFor="search-input">Find a villager
            </StyledLabel>
            <StyledInput
                type="text" value={waitSearchString} onChange={e => handleChange(e)} id="search-input">

            </StyledInput>
            {/* <Link to="/search" onClick={e => handleSubmit(e)}>Search */}
            <StyledButton
                onClick={e => handleSubmit(e)}>
                search
            </StyledButton>
            {/* </Link> */}
        </StyledForm>

    )
}


//What do i need to do?
//take the search string I received as props
//find the object in the villager JSON data that has that name
//return that villager as a thumbnail