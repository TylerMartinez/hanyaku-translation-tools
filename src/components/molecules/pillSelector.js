import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Pill } from '../atoms'

const PillSelctorStyle = styled.div`
  display: inline-block;
`

const PillSelector = props => {
  // State Hooks

  // Functions
  const getPillsRender = () => {
    if (props.selections && props.selections.length) {
      return props.selections.map((selection, i) =>
        <Pill style={{marginRight: '5px'}} key={i} onClick={() => props.onClick(i)}>
          {selection}
        </Pill>
      )
    }
  }

  // Render
  return (
    <PillSelctorStyle>
      {getPillsRender()}
    </PillSelctorStyle>
  )
}

// Proptypes
PillSelector.propTypes = {
  selections: PropTypes.array,
  isJapanese: PropTypes.bool,
  onClick: PropTypes.func
}

export default PillSelector
