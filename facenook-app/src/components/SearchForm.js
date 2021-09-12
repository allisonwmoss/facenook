import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <form>
            <label htmlFor="search-input">Find villager by name:</label>
            <input type="text" value={waitSearchString} onChange={e => handleChange(e)} id="search-input"></input>
            {/* <Link to="/search" onClick={e => handleSubmit(e)}>Search */}
            <button onClick={e => handleSubmit(e)}>search</button>
            {/* </Link> */}
        </form>

    )
}


//What do i need to do?
//take the search string I received as props
//find the object in the villager JSON data that has that name
//return that villager as a thumbnail