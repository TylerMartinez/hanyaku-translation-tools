import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const SectionStyle = styled.div`
  background-color: ${props => props.theme.bg2};
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  border-radius: 4px;

  font-family: "Montserrat Medium";
  color: ${props => props.theme.color1};
  font-size: 13px;

  @media only screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

// Component
const Section = props => {
  return (
    <SectionStyle className={props.fill ? 'flex-grow-1' : ''} >
      {props.children}
    </SectionStyle>
  )
}

// Proptypes
Section.propTypes = {
  fill: PropTypes.bool,
  children: PropTypes.any
}

export default Section
