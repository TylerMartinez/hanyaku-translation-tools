import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
const ViewportStyle = styled.div`
  height: calc(100% - 22px);
  padding-bottom: 32px;
`

// Componnent
const Viewport = props => {
  return (
    <ViewportStyle className='container d-flex flex-column'>
      {props.children}
    </ViewportStyle>
  )
}

// Proptypes
Viewport.propTypes = {
  children: PropTypes.any
}

export default Viewport