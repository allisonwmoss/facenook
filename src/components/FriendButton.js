import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
width: 30px;
height: 30px;
background-image: url('https://i.imgur.com/91hyQJ6.png');
background-size: 100%;
background-position: center;
background-repeat: no-repeat;
&:hover {
background-image: url('https://i.imgur.com/Hs3nlnN.png');
}
`
export default function FriendButton(props) {
    return (
        <StyledButton />
    )
}