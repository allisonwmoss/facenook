import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <Link to={'/back'} homepageVillagers={props.homepageVillagers}>
            <div>
                <h1>go back</h1>
            </div>
        </Link>
    )
}