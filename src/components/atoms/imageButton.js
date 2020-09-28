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
  cursor: pointer;
  outline: none;
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};
  transform: ${props => props.flip ? "rotate(180deg)" : ""};

  .image {
    height: ${props => props.size ? props.size: "15px"};
    width: ${props => props.size ? props.size: "15px"};
  }

  &:disabled {
    background: ${props => props.theme.disabled};
    color: ${props => props.theme.disabledText};
  }

  & svg path{
    fill: ${props => props.theme.imageButton} !important;
  }

  &:hover svg path {
    fill: ${props => props.theme.imageButton_hover} !important;
  }
`

// Component
const ImageButton = props => {
  //Render
  return (
    <ImageButtonStyle flip={props.flip} position={props.position} left={props.left} right={props.right} size={props.size}>
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
  size: PropTypes.string
}

export default ImageButton
