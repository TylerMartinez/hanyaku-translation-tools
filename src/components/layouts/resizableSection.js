import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const ResizableSectionStyle = styled.div`
  resize: vertical;
  overflow:hidden;
  padding-bottom: 15px;
`

// Component
const ResizableSection = props => {
  return (
    <ResizableSectionStyle className='d-flex flex-column flex-grow-1'>
      {props.children}
    </ResizableSectionStyle>
  )
}

// Proptypes
ResizableSection.propTypes = {
  children: PropTypes.any
}

export default ResizableSection
