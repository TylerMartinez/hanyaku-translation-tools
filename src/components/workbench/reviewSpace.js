import React from 'react'
import PropTypes from 'prop-types'
import { Column } from '../layouts'
import { ScreenCapture } from '../molecules'
import { Title } from '../atoms'

// Component
const ReviewSpace = props => {

  // State Hooks

  // Functions

  // Actions

  // Variables

  return (
    <Column col={props.col} flex={true}>
      <ScreenCapture />
      <div>
        <Title>
          Control Panel
        </Title>
      </div>
    </Column>
  )
}

// Prop Types
ReviewSpace.propTypes = {
  col: PropTypes.number
}

export default ReviewSpace
