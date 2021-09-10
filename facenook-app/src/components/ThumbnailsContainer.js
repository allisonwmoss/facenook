import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'

export default function ThumbnailsContainer(props) {
    // console.log(props.villagers)
    const [thumbnailVillagers, setThumbnailVillagers] = useState([])

    useEffect(() => {
        console.log(props.villagers.length)
        if (props.villagers.length === 0) {
            return (
                <h2>loading, please wait...</h2>
            )
        } else {
            const valuesArr = Object.values(props.villagers)
            let newThumbnailVillagers = []
            for (let i = 0; i < 5; i++) {
                const randomId = Math.ceil(Math.random() * 391)
                const matchingVillager = valuesArr.find(villager =>
                    villager.id === randomId
                )
                console.log(randomId)
                console.log(matchingVillager)
                newThumbnailVillagers.push(matchingVillager)
            }
            console.log(newThumbnailVillagers)
            setThumbnailVillagers(newThumbnailVillagers)
            console.log(thumbnailVillagers)
        }
    }, [])

    // console.log(allVillagersObj)


    // console.log(typeof valuesArr)
    // console.log(valuesArr)



    return (
        <div>
            {/* {
                villagers.map((villager, idx) => {
                    return (
                        <Thumbnail villager={villager} key={idx} />
                    )
                })
            } */}
        </div>
    )
}