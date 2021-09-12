import React, { useState, useEffect } from 'react'
import AllThumbnails from './allThumbnails';
import Error from './Error';
import SearchForm from './SearchForm';
const axios = require('axios').default

export default function ThumbnailsContainer(props) {

    const [isLoading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState({})
    const [searchString, setSearchString] = useState('Goldie')

    //See footnote 1---
    useEffect(() => {
        //See footnote 3---
        axios.get("https://acnhapi.com/v1/villagers/").then(response => {
            setVillagers(response.data)
            setLoading(false)
        })
            .catch(error => {
                console.log(error)
                return (
                    <Error />
                )
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <h2>Loading, please wait</h2>
        )
    }

    return (
        <div>
            <SearchForm searchString={searchString} setSearchString={setSearchString} villagers={villagers} />
            <AllThumbnails villagers={villagers} />
        </div>
    )
    //--------


}