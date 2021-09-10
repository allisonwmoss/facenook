import React, { useState } from 'react'
import Thumbnail from './Thumbnail'

export default function ThumbnailsContainer(props) {
    const villagers = props.villagers
    console.log(villagers)
    return (
        <div>
            {
                villagers.map((villager, idx) => {
                    return (
                        <Thumbnail villager={villager} key={idx} />
                    )
                })
            }
        </div>
    )
}