import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Style
const ColumnStyle = styled.div`
  display: ${props => props.col === 0 ? 'none' : 'block'};

  div::-webkit-scrollbar {
  width: 10px;
  }

  div::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbar_thumb};
    border-radius: 20px;
  }

  div::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbar_track};
    border-radius: 20px;
  }
`

// Component
const Column = props => {

  // Functions
  const getClassName = () => {
    var result = ""

    if (props.col) {
      result += 'col-' + props.col.toString()
    } else {
      result += 'col'
    }

    if (props.justify) {
      result += " d-inline-flex justify-content-" + props.justify
    }

    if(props.flex) {
      result += " d-flex flex-column"
    }

    return result
  }

  return (
    <ColumnStyle col={props.col} className={getClassName()} >
      {props.children}
    </ColumnStyle>
  )
}

// Proptypes
Column.propTypes = {
  col: PropTypes.number,
  children: PropTypes.any,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  flex: PropTypes.bool
}

export default Column
