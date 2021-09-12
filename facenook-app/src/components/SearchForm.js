import React from 'react'

export default function SearchForm(props) {
    const searchString = props.searchString
    const setSearchString = props.setSearchString
    const villagers = props.villagers
    // console.log(villagers)
    function findVillager(searchString) {
        console.log(searchString)
        const valuesArr = Object.values(villagers)
        const matchingVillager = valuesArr.find(villager =>
            villager.name['name-USen'] === searchString
        )
        console.log(matchingVillager)
    }
    function handleChange(e) {
        setSearchString(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        findVillager(searchString)
        // setSearchString('')
    }
    return (
        <form>
            <label htmlFor="search-input">Find villager by name:</label>
            <input type="text" value={searchString} onChange={e => handleChange(e)} id="search-input"></input>
            <button onClick={e => handleSubmit(e)}>search</button>
        </form>

    )
}


//What do i need to do?
//take the search string I received as props
//find the object in the villager JSON data that has that name
//return that villager as a thumbnail