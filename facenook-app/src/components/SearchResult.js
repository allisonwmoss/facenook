import React from 'react'
import Thumbnail from './Thumbnail'
import Error from './Error'
import { Link } from 'react-router-dom'

export default function SearchResult(props) {
    const searchString = props.searchString
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