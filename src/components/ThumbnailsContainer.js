import React, { useState, useEffect } from 'react'
import AllThumbnails from './allThumbnails';
import styled, { keyframes } from 'styled-components'
import Error from './Error';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
const axios = require('axios').default

//Loading effect while the API response comes back----
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
padding: 100px;
`
//-------
export default function ThumbnailsContainer() {

    const [isLoading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState({})
    const [searchString, setSearchString] = useState('')
    const [friends, setFriends] = useState([])
    const [isFriend, setIsFriend] = useState(false)

    //See footnote 1---
    useEffect(() => {
        //See footnote 3---
        axios.get("https://acnhapi.com/v1/villagers/").then(response => {
            // console.log(Object.values(response))
            // const resp = Object.values(response)
            // const resp2 = JSON.parse(resp)
            // console.log(resp2)
            // console.log(typeof resp)
            // console.log(resp[0])
            // const respArr = resp[0]
            // console.log(respArr)
            // console.log(typeof respArr)

            // const friendedArr = respArr.map(villager => ({
            //     ...villager,
            //     isFriend: false
            // }))
            // console.log(friendedArr)

            // setVillagers(friendedArr)
            // console.log(villagers)

            // const valuesArr = Object.values(villagers)
            // const friendedArr = valuesArr.map(villager => ({
            //     ...villager,
            //     isFriend: false
            // }))
            // setVillagers(friendedArr)
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
        <div>
            <SearchForm searchString={searchString} setSearchString={setSearchString} villagers={villagers} />
            <AllThumbnails
                villagers={villagers}
                friends={friends}
                setFriends={setFriends}
                isFriend={isFriend}
                setIsFriend={setIsFriend}
            />
        </div>
    )
    //--------


}
