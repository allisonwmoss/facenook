import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'

export default function AllThumbnails(props) {
    const villagers = props.villagers
    const [thumbnailVillagers, setThumbnailVillagers] = useState([])
    useEffect(() => {
        //See Footnote 2-------------------------------
        const valuesArr = Object.values(villagers)
        let newThumbnailVillagers = []
        for (let i = 0; i < 5; i++) {
            const randomId = Math.ceil(Math.random() * 391)
            const matchingVillager = valuesArr.find(villager =>
                villager.id === randomId
            )
            //---------------------------------------------
            newThumbnailVillagers.push(matchingVillager)
        }
        setThumbnailVillagers(newThumbnailVillagers)
    }, [])

    return (
        <div>
            {
                thumbnailVillagers.map((villager, idx) => {
                    return (
                        <Thumbnail villager={villager} key={idx} thumbnailVillagers={thumbnailVillagers} />
                    )
                })
            }
        </div>
    )
}