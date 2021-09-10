import React, { useState, useEffect } from 'react'
import AllThumbnails from './allThumbnails';
import Thumbnail from './Thumbnail'
const axios = require('axios').default

export default function ThumbnailsContainer() {
    const [isLoading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState({})
    // const [villager, setVillager] = useState({})
    useEffect(() => {
        axios.get("https://acnhapi.com/v1/villagers/").then(response => {
            setVillagers(response.data)
            setLoading(false)
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
    // const [thumbnailVillagers, setThumbnailVillagers] = useState([])

    // useEffect(() => {
    //     if (!villagers) {
    //         return (
    //             <h2>loading, please wait...</h2>
    //         )
    //     } else {
    //         const valuesArr = Object.values(villagers)
    //         let newThumbnailVillagers = []
    //         for (let i = 0; i < 5; i++) {
    //             const randomId = Math.ceil(Math.random() * 391)
    //             const matchingVillager = valuesArr.find(villager =>
    //                 villager.id === randomId
    //             )
    //             console.log(randomId)
    //             console.log(matchingVillager)
    //             newThumbnailVillagers.push(matchingVillager)
    //         }
    //         console.log(newThumbnailVillagers)
    //         setThumbnailVillagers(newThumbnailVillagers)
    //         console.log(thumbnailVillagers)
    //     }
    // }, [])


    // return (
    //     <div>
    //         {/* {
    //             villagers.map((villager, idx) => {
    //                 return (
    //                     <Thumbnail villager={villager} key={idx} />
    //                 )
    //             })
    //         } */}
    //     </div>
    // )
}