import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const thumbnailAnimation = keyframes`
from{
    transform: translateY(0px)
} to {
    transform: translateY(-10px)
}
`

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
//See footnote 5----
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
&:hover{
        animation: ${thumbnailAnimation} 0.3s;
    }
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
    //Resolve some issues where lack of contrast creates poor user experience:
    if (backgroundColor === '#ffffff') {
        backgroundColor = '#000000'
    }
    if (backgroundColor === '#fff98f') {
        backgroundColor = '#c9ab3c'
    }
    if (backgroundColor === '#ffebff') {
        backgroundColor = '#d669d6'
    }
    //-----
    const bubbleStyle = {
        backgroundColor: backgroundColor,
        color: backgroundColor,
    }

    return (
        <Link to={{
            pathname: `/${villager.id}`,
            state: {
                villager: { villager }
            }
        }}>
            <ThumbnailDiv style={bubbleStyle}>
                <img src={villager['icon_uri']} alt={villager.name['name-USen']} />
                <VillagerName>{villager.name['name-USen']}</VillagerName>
                {/* <p>{villager.isFriend}</p> */}
            </ThumbnailDiv>
        </Link>
    )
}