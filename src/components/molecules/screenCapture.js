import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
import { Button } from '../atoms'


const ScreenCaptureStyle = styled.div`
  max-height: 700px;
  overflow: hidden;

  .view {
    background: black;
    margin: 15px;
    position: relative;
    height: calc(100% - 30px);
  }
  
  .setBoundsButton {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`

const ScreenCapture = () => {
  // State Hooks

  // Functions

  // Render
  return (
    <ScreenCaptureStyle className="flex-grow-1">
      <div className="view">
        <Button className="setBoundsButton">
          Set Bounds
        </Button>
      </div>
    </ScreenCaptureStyle>
  )
}

// Proptypes
ScreenCapture.propTypes = {
}

export default ScreenCapture
