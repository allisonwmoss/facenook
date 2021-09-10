import React from 'react'

export default function Thumbnail(props) {
    const villager = props.villager
    console.log(villager)
    return (
        <div>
            <img src={villager['icon_uri']} />
            <h3>{villager.name['name-USen']}</h3>
        </div>
    )
}