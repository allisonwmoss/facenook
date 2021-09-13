import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ThumbnailsDiv = styled.div`
margin-top: 50px;
margin-bottom: 20px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

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
        <ThumbnailsDiv>
            {
                thumbnailVillagers.map((villager, idx) => {
                    return (
                        <Thumbnail villager={villager} key={idx} thumbnailVillagers={thumbnailVillagers} />
                    )
                })
            }
        </ThumbnailsDiv>
    )
}