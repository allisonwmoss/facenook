import React from 'react'

export default function Thumbnail(props) {
    const villager = props.villager
    if (!villager) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    console.log(villager)
    return (
        <div>
            <img src={villager['icon_uri']} />
            <h3>{villager.name['name-USen']}</h3>
        </div>
    )
}