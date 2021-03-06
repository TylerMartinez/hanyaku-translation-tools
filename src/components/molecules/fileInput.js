import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from '../atoms'
import { Row, Column } from '../layouts'
import { remote } from 'electron'

const FileInput = props => {
  // State Hooks
  var [selectedFile, setSelectedFile] = useState('')

  // Functions
  const onSelect = () => {
    const fileDestination = remote.dialog.showOpenDialogSync({
      title: props.fileTitle,
      properties: ['openDirectory']
    })

    if (fileDestination) {
      setSelectedFile(fileDestination[0])

      props.saveToState(props.name, fileDestination[0])
    }
  }

  // Render
  return (
    <Row>
      <Column col={10}>
        <Input
          name={props.name}
          value={selectedFile}
          placeholder='Save Location'
          disabled
        />
      </Column>
      <Column col={2}>
        <Button onClick={() => onSelect()} stretch={true}>
          Select...
          </Button>
      </Column>
    </Row>
  )
}

// Proptypes
FileInput.propTypes = {
  name: PropTypes.string,
  fileTitle: PropTypes.string,
  saveToState: PropTypes.func
}

export default FileInput
