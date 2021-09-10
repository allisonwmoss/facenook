import React, { useEffect, useState } from 'react'
import Nav from './Nav'

export default function VillagerDetail(props) {
    const villager = props.location.state.villager.villager
    const homepageVillagers = props.location.state.homepageVillagers
    console.log(homepageVillagers)
    return (
        <div>
            <Nav homepageVillagers={homepageVillagers} />
            <img src={villager['image_uri']} alt={villager.name['name-USen']} />
            <h1>{villager.name['name-USen']}</h1>
            <h2>{villager.species}</h2>
            <h3>Birthday: {villager['birthday-string']}</h3>
            <h3>Personality: {villager.personality}</h3>
            <h3>Catchphrase: '{villager['catch-translations']['catch-USen']}'</h3>
            <h4>Hobby: {villager.hobby}</h4>
            <h4>Quote:</h4>
            <p>"{villager.saying}"</p>
        </div>
    )
}