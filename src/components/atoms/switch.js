import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

//Styles
const SwitchSocket = styled.div`
  background: ${props => props.theme.switchSocket};
  border-radius: 10px;
  height: 15px;
  width: 35px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
`

const SwitchRocker = styled.div`
   ${props => {
    if(props.status) {
      return "background-color:" + props.theme.switchOn 
    } else {
      return "background-color:" + props.theme.switchOff
    }
  }};
  border-radius: 25px;
  height: 15px;
  width: 15px;
  cursor: pointer;
  position: absolute;
`

const SwitchLabel = styled.div`
  font-family: ${props => props.japanese ? props.theme.japanese : props.theme.english};
  font-size: 14px;
  color: ${props => props.theme.switchLabel};
  user-select: none;
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  vertical-align: middle;
`

const SwitchStyle = styled.div`
  display: inline-block;
  margin-right:10px;
`

// Component
const Switch = props => {
  //Render
  return (
    <SwitchStyle>
      <SwitchSocket>
        <SwitchRocker className={props.status ? "slide-right" : "slide-left"} status={props.status} onClick={() => {props.click(!props.status)}} />
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
  status: PropTypes.bool,
  label: PropTypes.string,
  japanese: PropTypes.bool,
  click: PropTypes.func
}

export default Switch
