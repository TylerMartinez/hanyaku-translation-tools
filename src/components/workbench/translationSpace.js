import React, { useState } from 'react'
import { Row, Column } from '../layouts'
import { TextArea, Title } from '../atoms'
import { JapaneseInput } from '../molecules'

// Component
const TranslationSpace = () => {
  // State Hooks
  var [romajiValue, setRomajiValue] = useState('')

  // Functions

  // Actions

  // Variables

  return (
    <div>
      <Row>
        <Column>
          <Title>
            Original
          </Title>
          <JapaneseInput rows="5" onRomajiUpdate={(romaji) => setRomajiValue(romaji)}/>
          <Title>
            Romaji
          </Title>
          <TextArea rows="5" value={romajiValue} onChange={(e) => setRomajiValue(e.target.value)}/>
          <Title>
            Translation
          </Title>
          <TextArea rows="5" />
        </Column>
      </Row>
    </div>
  )
}

// Prop Types
TranslationSpace.propTypes = {
}

export default TranslationSpace
