import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const RowStyle = styled.div`
  padding-top: 10px;
`

// Component
const Section = props => {
  return (
    <RowStyle className={ props.fill ? 'row flex-grow-1' : 'row'} >
      {props.children}
    </RowStyle>
  )
}

// Proptypes
Section.propTypes = {
  children: PropTypes.any,
  fill: PropTypes.bool
}

export default Section
