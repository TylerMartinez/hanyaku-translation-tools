import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'


const ScreenCaptureStyle = styled.div`
  max-height: 700px;
  overflow: hidden;

  .view {
    background: black;
    margin: 15px;
    padding-bottom: calc(100% - 30px);
  }
`

const ScreenCapture = () => {
  // State Hooks

  // Functions

  // Render
  return (
    <ScreenCaptureStyle>
      <div className="view">

      </div>
    </ScreenCaptureStyle>
  )
}

// Proptypes
ScreenCapture.propTypes = {
}

export default ScreenCapture
