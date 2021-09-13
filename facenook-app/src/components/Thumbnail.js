import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ThumbnailDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid transparent;
border-radius: 20%;
height: 90%;
width: 180px;
padding: 5px;
margin: 15px;
color: white;
`

const VillagerName = styled.h3`
background-color: white;
padding: 5px;
border-radius: 20%;
font-size: 2em;
`

export default function Thumbnail(props) {
    const villager = props.villager
    let backgroundColor = villager['bubble-color']
    let bubbleColor = backgroundColor;
    if (backgroundColor === '#ffffff') {
        backgroundColor = '#000000'
    }
    console.log(bubbleColor)
    const bubbleStyle = {
        backgroundColor: backgroundColor,
        color: backgroundColor,
    }
    return (
        <Link to={{
            pathname: `/${villager.id}`,
            state: {
                villager: { villager },
                homepageVillagers: props.thumbnailVillagers
            }
        }}>
            <ThumbnailDiv style={bubbleStyle}>
                <img src={villager['icon_uri']} alt={villager.name['name-USen']} />
                <VillagerName>{villager.name['name-USen']}</VillagerName>
            </ThumbnailDiv>
        </Link>
    )
}