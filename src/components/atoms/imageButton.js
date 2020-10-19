import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageButtonStyle = styled.button`
  background: transparent;
  border: none;
  height: "15px";
  width: "15px";
  padding: 0px;
  color: ${props => props.theme.imageButton};
  cursor: ${props => !props.disabled ? "pointer": ""};
  outline: none;
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  transform: ${props => props.flip ? "rotate(180deg)" : ""};

  .image {
    height: ${props => props.size ? props.size: "15px"};
    width: ${props => props.size ? props.size: "15px"};
  }

  &:disabled svg path{
    fill: ${props => props.theme.imageButton_disabled} !important;
  }

  & svg path{
    fill: ${props => props.theme.imageButton} !important;
  }

  &:hover svg path {
    fill: ${props => !props.disabled ? props.theme.imageButton_hover: ""} !important;
  }
`

// Component
const ImageButton = props => {
  //Render
  return (
    <ImageButtonStyle flip={props.flip} 
                      position={props.position} 
                      left={props.left} 
                      right={props.right} 
                      top={props.top} 
                      size={props.size} 
                      disabled={props.disabled}
                      onClick={props.onClick}>
      <div className="image" dangerouslySetInnerHTML={{__html: props.image}}></div>
    </ImageButtonStyle>
  )
}

// PropTypes
ImageButton.propTypes = {
  image: PropTypes.string,
  flip: PropTypes.bool,
  position: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  top: PropTypes.string,
  onClick: PropTypes.func
}

export default ImageButton
