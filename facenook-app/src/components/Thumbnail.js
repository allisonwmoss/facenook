import React from 'react'
import { Link } from 'react-router-dom'


export default function Thumbnail(props) {
    const villager = props.villager
    return (
        <Link to={{
            pathname: `/${villager.id}`,
            state: {
                villager: { villager }
            }
        }}>
            <div>
                <img src={villager['icon_uri']} alt={villager.name['name-USen']} />
                <h3>{villager.name['name-USen']}</h3>
            </div>
        </Link>
    )
}