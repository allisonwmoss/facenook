import React from 'react'
import styled from 'styled-components'

const FriendsDiv = styled.div`
display: flex;
flex-direction: column;
width: 35%;
background-color: #5CE1E6;
`

export default function FriendsList(props) {
    return (
        <FriendsDiv>
            <h2>all friends</h2>
            <h2>friend</h2>
            <h2>friend</h2>
            <h2>friend</h2>
        </FriendsDiv>
    )
}