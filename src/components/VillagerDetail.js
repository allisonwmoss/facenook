import React from 'react'
import styled from 'styled-components'

const VillagerDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5% 0%;
    margin: 50px;
    min-width: 850px;
    border-radius: 10%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const VillagerImg = styled.img`
    flex-grow: 1;
    margin: 5%;
    border: 50px solid white;
`

const VillagerInfoBox = styled.div`
flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-right: 5%;
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
        const rowStyle = {
            backgroundColor: bubbleColor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '3% 0%',
        }
        const elemStyle = {
            padding: '0px 30px',
            display: 'flex',
            flexDirection: 'column',
        }

        const nameStyle = {
            backgroundColor: bubbleColor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '3% 0%',
            flexGrow: '1',
        }
        return (
            <div>
                <VillagerDiv
                    style={cardStyle}>
                    <div style={elemStyle}>
                        <VillagerImg src={villager['image_uri']} alt={villager.name['name-USen']} />
                        <div style={nameStyle}>
                            <h2 style={elemStyle}>{villager.name['name-USen']}</h2>
                            <h2 style={elemStyle}><em>{villager.species}</em></h2>
                        </div>
                    </div>
                    <VillagerInfoBox>
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
                                <h2>Quote</h2>
                                <h3><em>"{villager.saying}"</em></h3>
                            </div>
                        </div>
                    </VillagerInfoBox>
                </VillagerDiv >
            </div>
        )
    }
}