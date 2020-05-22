import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

//Styles
const LightSocket = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${props => props.theme.lightSocket};
  border-radius: 50%;
  display: inline-flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
`

const LightSource = styled.div`
  height: 11px;
  width: 11.5px;
  background-color: ${props => {
    switch (props.status) {
      case 'on':
        return props.theme.lightOn

      default:
        return props.theme.lightOff
    }
  }};
  border-radius: 50%;
`
const LightLabel = styled.div`
  font-family: ${props => props.japanese ? props.theme.japanese : props.theme.english};
  font-size: 14px;
  color: ${props => props.theme.lightLabel};
  user-select: none;
  display: inline-block;
  font-weight: bold;
`

const StatusLightStyle = styled.div`
  display: inline-block;
  height:30px;
  margin-right:10px;
`

// Component
const StatusLight = props => {

  //Render
  return (
    <StatusLightStyle>
      <LightSocket>
        <LightSource status={props.status} />
      </LightSocket>
      <LightLabel>
        {props.label}
      </LightLabel>
    </StatusLightStyle>
  )
}

// PropTypes
StatusLight.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string,
  japanese: PropTypes.bool
}

export default StatusLight
