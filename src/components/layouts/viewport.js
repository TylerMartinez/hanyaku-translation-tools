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
    <ViewportStyle className={(props.fluid === true ? 'container-fluid' : 'container') + ' d-flex flex-column'}>
      {props.children}
    </ViewportStyle>
  )
}

// Proptypes
Viewport.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.any
}

export default Viewport