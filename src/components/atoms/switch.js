import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

//Styles
const SwitchSocket = styled.div`
  background: ${props => props.theme.switchSocket};
  border-radius: 5px;
  height: 10px;
  width: 25px;
`

const SwitchRocker = styled.div`
  background-color: ${props => {
    switch (props.status) {
      case 'on':
        return props.theme.switchOn

      default:
        return props.theme.switchOff
    }
  }};
  border-radius: 10px;
  height: 10px;
  width: 10px;
`

const SwitchLabel = styled.div`
  font-family: ${props => props.japanese ? props.theme.japanese : props.theme.english};
  font-size: 14px;
  color: ${props => props.theme.switchLabel};
  user-select: none;
  display: inline-block;
  font-weight: bold;
`

const SwitchStyle = styled.div`
  display: inline-block;
  height:30px;
  margin-right:10px;
`

// Component
const Switch = props => {

  //Render
  return (
    <SwitchStyle>
      <SwitchSocket>
        <SwitchRocker status={false} />
      </SwitchSocket>
      <SwitchLabel>
        {props.label}
      </SwitchLabel>
    </SwitchStyle>
  )
}

// PropTypes
Switch.propTypes = {
  property: PropTypes.string,
  label: PropTypes.string,
  japanese: PropTypes.bool
}

export default Switch
