import React from 'react'
import Thumbnail from './Thumbnail'
import Error from './Error'

export default function SearchResult(props) {
    let searchString = props.searchString
    //convert any search string to lowercase with uppercased first letter
    //See Footnote 4----
    searchString = searchString.toLowerCase();
    searchString = searchString.charAt(0).toUpperCase() + searchString.slice(1)

    const villagers = props.villagers
    const valuesArr = Object.values(villagers)
    const matchingVillager = valuesArr.find(villager =>
        villager.name['name-USen'] === searchString
    )
    if (!matchingVillager) {
        return (
            <Error reason="no-match" />
        )
    }

    return (
        <Thumbnail villager={matchingVillager} />
    )
}