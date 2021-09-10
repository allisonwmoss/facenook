import React, { useState, useEffect } from 'react'
import AllThumbnails from './allThumbnails';
import Error from './Error';
const axios = require('axios').default

export default function ThumbnailsContainer(props) {

    const [isLoading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState({})

    //See footnote 1---
    useEffect(() => {
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
            <AllThumbnails villagers={villagers} />
        </div>
    )
    //--------


}