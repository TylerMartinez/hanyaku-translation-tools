import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TranslatingTitleStyle = styled.div`
  .translating-title-container {
      height: 47px;
  }

  .translating-title-eng {
      margin-top: 10px;
      font-family: ${props => props.theme.englishTitle};
      font-size: 28px;
      color: ${props => props.theme.title1};
      user-select: none;
      position: absolute;
  }

  .translating-title-jap {
      margin-top: 10px;
      font-family: ${props => props.theme.japanese};
      font-size: 25px;
      color: ${props => props.theme.title1};
      user-select: none;
      opacity: 0;
      position: absolute;
  }
`

const TranslatingTitle = props => {
  // State Hooks
  const [state, setState] = useState({
    class: 'translating-title-eng',
    translationClass: 'translating-title-jap',
    animating: false
  })
  const isMountedRef = useRef(null)

  // Effect Hooks
  useEffect(() => {
    isMountedRef.current = true;

    return () => isMountedRef.current = false;
  })

  // Functions
  const onEnter = () => {
    if (!state.animating) {
      setState({
        class: 'translating-title-eng fade-out-in',
        translationClass: 'translating-title-jap fade-in-out',
        animating: true
      })

      setTimeout(() => {
        if (isMountedRef.current) {
          setState({
            class: 'translating-title-eng',
            translationClass: 'translating-title-jap',
            animating: false
          })
        }
      }, 2500)
    }
  }

  // Render
  return (
    <TranslatingTitleStyle>
      <div className='translating-title-container' onMouseEnter={() => { onEnter() }}>
        <div className={state.class}>
          {props.value}
        </div>
        <div className={state.translationClass}>
          {props.translation}
        </div>
      </div>
    </TranslatingTitleStyle>
  )
}

// Prop Types
TranslatingTitle.propTypes = {
  value: PropTypes.string,
  translation: PropTypes.string
}

export default TranslatingTitle
