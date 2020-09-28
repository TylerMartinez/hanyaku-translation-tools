import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const RowStyle = styled.div`
  ${props => props.padding ? "padding-left: 15px; padding-right: 15px;" : ""}
`

// Component
const Section = props => {
  return (
    <RowStyle padding={props.padding} className={ props.fill ? 'row flex-grow-1' : 'row'} >
      {props.children}
    </RowStyle>
  )
}

// Proptypes
Section.propTypes = {
  children: PropTypes.any,
  fill: PropTypes.bool,
  padding: PropTypes.bool
}

export default Section
