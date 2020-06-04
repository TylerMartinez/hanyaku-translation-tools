import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Column, ResizableSection } from '../layouts'
import { TextArea, Title } from '../atoms'
import { JapaneseInput } from '../molecules'

// Component
const TranslationSpace = props => {
  // State Hooks
  var [romajiValue, setRomajiValue] = useState('')

  // Functions

  // Actions

  // Variables

  // Render
  return (
    <Column col={props.col} flex={true}>
      <ResizableSection>
        <Title>
          Original
        </Title>
        <JapaneseInput onRomajiUpdate={(romaji) => setRomajiValue(romaji)} />
      </ResizableSection>
      <ResizableSection>
        <Title>
          Romaji
        </Title>
        <TextArea className="flex-grow-1" value={romajiValue} onChange={(e) => setRomajiValue(e.target.value)} />
      </ResizableSection>
      <ResizableSection>
        <Title>
          Translation
        </Title>
        <TextArea className="flex-grow-1" />
      </ResizableSection>
    </Column>
  )
}

// Prop Types
TranslationSpace.propTypes = {
  col: PropTypes.number
}

export default TranslationSpace
