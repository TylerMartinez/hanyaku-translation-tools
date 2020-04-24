import React from 'react'
import { Row, Column } from '../layouts'
import { TextArea, Title } from '../atoms'

// Component
const TranslationSpace = () => {

  // State Hooks

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
          <TextArea rows="5" />
          <Title>
            Romaji
       </Title>
          <TextArea rows="5" />
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
