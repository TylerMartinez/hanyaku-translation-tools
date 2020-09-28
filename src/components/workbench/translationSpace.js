import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Column, Row, RelativeSection } from '../layouts'
import { useSelector } from 'react-redux'
import { TextArea, Title, ImageButton } from '../atoms'
import { JapaneseInput } from '../molecules'
import RightArrow from '../../images/right-arrow'
import Camera from '../../images/camera'

// Component
const TranslationSpace = props => {
  // State Hooks
  var [romajiValue, setRomajiValue] = useState('')

  // Functions

  // Selectors
  const workbenchSettings = useSelector(state => state.project.data.workspace)

  // Actions

  // Variables

  // Render
  return (
    <Column col={props.col} flex={true}>
      <Row padding={true}>
        <Title>
          Original
        </Title>
      </Row>
      <Row fill={true} padding={true}>
        <JapaneseInput onRomajiUpdate={(romaji) => setRomajiValue(romaji)} />
      </Row>
      { workbenchSettings.romaji && 
        <Row padding={true}>
          <Title>
            Romaji
          </Title>
        </Row>}
      { workbenchSettings.romaji &&
        <Row fill={true} padding={true}>  
          <TextArea className="flex-grow-1" value={romajiValue} onChange={(e) => setRomajiValue(e.target.value)} />
      </Row>}
      <Row padding={true}>
        <Title>
          Translation
        </Title>
      </Row>
      <Row fill={true} padding={true}>  
        <TextArea className="flex-grow-1" />
      </Row>
      <RelativeSection>
        <ImageButton flip={true} image={RightArrow} position={"absolute"} left={"0px"}/>
        <ImageButton image={Camera} position={"absolute"} size={"20px"} left={"calc(50% - 10px)"}/>
        <ImageButton image={RightArrow} position={"absolute"} right={"0px"}/>
      </RelativeSection>
    </Column>
  )
}

// Prop Types
TranslationSpace.propTypes = {
  col: PropTypes.number
}

export default TranslationSpace
