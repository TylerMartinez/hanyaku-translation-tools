import React, { useRef, useState } from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
import { Button } from '../atoms'
import { remote } from 'electron'
import { takeScreenshot } from '../../utils/capturingUtils'


const ScreenCaptureStyle = styled.div`
  max-height: 700px;
  overflow: hidden;

  .view {
    background: black;
    margin-top: 15px;
    position: relative;
    height: calc(100% - 30px);
  }

  .viewInner {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  
  .setBoundsButton {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  .image{
    vertical-align: middle;
    max-height: 100%;
    max-width: 100%;
  }

  .imageHelper{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`

const ScreenCapture = () => {
  // Ref Hooks
  var boundsWindow = useRef(null)

  // State Hooks
  var [boundsWindowOpen, setBoundsWindowOpen]  = useState(false)
  var [screenShot, setScreenShot]  = useState(null)

  // Functions
  const toggleBoundsWindow = async () => {
    if(boundsWindow.current){
      // Get window
      let window = await boundsWindow.current.webContents.executeJavaScript('window')

      // Get Crop
      let crop = {
        height: window.innerHeight - 27,
        width: window.innerWidth - 4,
        distanceX: window.screenLeft ,
        distanceY: window.screenTop - 1
      }

      await takeScreenshot(boundsWindow.current.getBounds(), crop, (img) => {setScreenShot(img)})

      boundsWindow.current.close()
      boundsWindow.current = null;
      setBoundsWindowOpen(false)
    } else {
      // Create window
      boundsWindow.current = new remote.BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        minWidth: 100,
        minHeight: 100,
        transparent: true
      })

      // and load the index.html of the app.
      boundsWindow.current.loadFile('./captureIndex.html')

      // Emitted when the window is closed.
      boundsWindow.current.on('closed', () => {
        boundsWindow.current = null
      })

      setBoundsWindowOpen(true)
    }
  }

  // Render
  return (
    <ScreenCaptureStyle className="flex-grow-1">
      <div className="view">
        {screenShot &&
          <div className="viewInner"><span className="imageHelper"></span><img className="image" src={screenShot}></img></div>
        }
        <Button className="setBoundsButton" onClick={() => toggleBoundsWindow()}>
          {boundsWindowOpen ? "Capture Bounds" : "Set Bounds"}
        </Button>
      </div>
    </ScreenCaptureStyle>
  )
}

// Proptypes
ScreenCapture.propTypes = {
}

export default ScreenCapture
