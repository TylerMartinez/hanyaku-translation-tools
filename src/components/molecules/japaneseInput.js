import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TextArea } from '../atoms'
import * as wanakana from 'wanakana'

const JapaneseInput = props => {
  // State Hooks
  var [inputValue, setInputValue] = useState('')

  // Effect Hooks
  useEffect(() => {
    // Debouncing the translation
    const timer = setTimeout(() => {

      // Throw up the romaji
      let kanaTokens = wanakana.tokenize(inputValue, { detailed: true })
      let romaji = ''

      kanaTokens.forEach(token => {
        if (token.type === "hiragana" || token.type === "katakana")
          romaji += wanakana.toRomaji(token.value, { upcaseKatakana: true, customKanaMapping: { ん: 'nn', ン: 'NN' } })
        else
          romaji += token.value
      })

      props.onRomajiUpdate(romaji)

      // Do the translation
      setInputValue(wanakana.toKana(inputValue, { customKanaMapping: { nn: 'ん', NN: 'ン' } }))

    }, 300)

    // Cleanup the timer 
    return () => clearTimeout(timer)
  }, [inputValue])

  // Functions

  // Render
  return (
    <div>
      <TextArea rows={props.rows} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
    </div>
  )
}

// Proptypes
JapaneseInput.propTypes = {
  rows: PropTypes.string,
  onRomajiUpdate: PropTypes.func
}

export default JapaneseInput
