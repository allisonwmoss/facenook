import React from 'react'
import styled from 'styled-components'

const CopyrightBlock = styled.div`
    margin: 50px;
    text-align: center;
`

export default function Copyright() {
    return (
        <CopyrightBlock>
            <p>Animal Crossing &copy; 2001-2021, Nintendo.</p>
        </CopyrightBlock>
    )
}