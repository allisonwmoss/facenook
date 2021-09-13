import React, { useEffect, useState } from 'react'
import styled, { keyframes, withTheme } from 'styled-components'

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const VillagerDiv = styled.div`
margin-top: 20px;
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
`

const VillagerImg = styled.img`
width: 75%;
margin-top: 10%;
margin-bottom: 10%;
border: 5px solid white;
`

export default function VillagerDetail(props) {
    if (!props.location.state) {
        return (
            <div></div>
        )
    }
    else {
        const villager = props.location.state.villager.villager
        let cardColor = villager['bubble-color']
        let bubbleColor = '#ffffff';
        let textColor = cardColor;
        //Resolve color contrast issues for better UX:
        if (cardColor === '#ffffff') {
            bubbleColor = '#000000'
        }
        if (cardColor === '#fff98f') {
            cardColor = '#c9ab3c'
            textColor = '#c9ab3c'
        }
        if (cardColor === '#ffebff') {
            cardColor = '#d669d6'
            textColor = '#d669d6'
        }
        //
        const cardStyle = {
            backgroundColor: cardColor,
            color: textColor,
        }
        const boxStyle = {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10%',
        }
        const rowStyle = {
            backgroundColor: bubbleColor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '2% 0%',
        }

        const elemStyle = {
            padding: '0px 30px',
            display: 'flex',
            flexDirection: 'column',
        }
        return (
            <div>
                <ContainerDiv>
                    <VillagerDiv
                        style={cardStyle}
                    >
                        <VillagerImg src={villager['image_uri']} alt={villager.name['name-USen']} />
                        <div style={boxStyle}>
                            <div style={rowStyle}>
                                <h1 style={elemStyle}>{villager.name['name-USen']}</h1>
                                <h2 style={elemStyle}><em>{villager.species}</em></h2>
                            </div>
                            <div style={rowStyle}>
                                <div style={elemStyle}>
                                    <h2>Birthday</h2>
                                    <h3>{villager['birthday-string']}</h3>
                                </div>
                                <div style={elemStyle}>
                                    <h2>Personality</h2>
                                    <h3>{villager.personality}</h3>
                                </div>
                            </div>
                            <div style={rowStyle}>
                                <div style={elemStyle}>
                                    <h2>Catchphrase</h2>
                                    <h3>'{villager['catch-translations']['catch-USen']}'</h3>
                                </div>
                                <div style={elemStyle}>
                                    <h2>Hobby</h2>
                                    <h3>{villager.hobby}</h3>
                                </div>
                            </div>
                            <div style={rowStyle}>
                                <div style={elemStyle}>
                                    <h4>Quote</h4>
                                    <p><em>"{villager.saying}"</em></p>
                                </div>

                            </div>
                        </div>
                    </VillagerDiv >
                </ContainerDiv>
            </div>
        )
    }
}