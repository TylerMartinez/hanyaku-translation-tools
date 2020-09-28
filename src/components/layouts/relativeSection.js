import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const RelativeSectionStyle = styled.div`
  position: relative;
  height:15px;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;

  font-family: ${props => props.theme.english};
  color: ${props => props.theme.color1};
  font-size: 13px;

  @media only screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

// Component
const RelativeSection = props => {
  return (
    <RelativeSectionStyle className={props.fill ? 'flex-grow-1' : ''} >
      {props.children}
    </RelativeSectionStyle>
  )
}

// Proptypes
RelativeSection.propTypes = {
  fill: PropTypes.bool,
  children: PropTypes.any
}

export default RelativeSection
