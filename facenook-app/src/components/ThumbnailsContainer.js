import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import AllThumbnails from './allThumbnails';
import styled, { keyframes } from 'styled-components'
import Error from './Error';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
const axios = require('axios').default

const LoadingBeachballEffect = keyframes`
     from {
         transform: rotate(0deg)
             }
     to {
         transform: rotate(360deg)
    }
`

const LoadingBeachball = styled.img`
animation: ${LoadingBeachballEffect} 2s infinite;
width: 30%;
height: 30%;
`

const LoadingMessage = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default function ThumbnailsContainer(props) {

    const [isLoading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState({})
    const [searchString, setSearchString] = useState('')

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
            <LoadingMessage>
                <LoadingBeachball src="https://i.imgur.com/lnrCkrf.png"></LoadingBeachball>
            </LoadingMessage>

        )
    }

    if (searchString && !isLoading) {
        return (
            <SearchResult searchString={searchString} villagers={villagers} />
        )
    }

    return (
        <Container>
            <SearchForm searchString={searchString} setSearchString={setSearchString} villagers={villagers} />
            <AllThumbnails villagers={villagers} />
        </Container>
    )
    //--------


}
