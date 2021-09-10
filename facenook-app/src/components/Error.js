import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h1>Uh-oh, something went wrong.</h1>
            <Link to="/">
                <h2>Click here to go back home.</h2>
            </Link>
        </div>
    )
}