import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TextArea, StatusLight } from '../atoms'
import * as wanakana from 'wanakana'
import * as AutoKanji from 'autokanji'

const JapaneseInput = props => {
  // State Hooks
  var [inputValue, setInputValue] = useState('')
  var [kanjiMode, setKanjiMode] = useState('off')
  var [kanjiLocation, setKanjiLocation] = useState(-1)
  var [applyingTranslation, setapplyingTranslation] = useState(false)

  // Ref Hooks
  var textArea = useRef(null);

  // Effect Hooks
  useEffect(() => {
    // Only run if we are not applying translation
    if(applyingTranslation){
      setapplyingTranslation(false)
      return
    }

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
      setapplyingTranslation(true)
      var translation = wanakana.toKana(inputValue, { customKanaMapping: { nn: 'ん', NN: 'ン' } })
      setInputValue(translation)

      // If in kanji mode fetch the suggestions
      if(kanjiMode === "on") {
        // Cut the kanji input out
        var kanjiInput = translation.slice(kanjiLocation)

        // Get suggestions
        var results = AutoKanji.find(kanjiInput)

        window.alert(results)
      }

    }, 300)

    // Cleanup the timer 
    return () => clearTimeout(timer)
  }, [inputValue])

  // Functions
  const parseKeyPress = e => {
    // Check kanji mode validation
    kanjiModeValidation(e)

    // Check hotkeys
    if(e.ctrlKey) {

      switch(e.keyCode) {

        // K key: enable kanji mode
        case 75:
          if(kanjiMode === 'off') {
            setKanjiMode('on')
            setKanjiLocation(textArea.current.selectionStart)
          }
          else {
            setKanjiMode('off')
            setKanjiLocation(-1)
          }

          break;
      }

    }
  }

  const kanjiModeValidation = (e) => {
    // Capture cursor location
    var cursorLocation = textArea.current.selectionStart
    if(e.keyCode && e.keyCode === 8) 
      cursorLocation--

    // Check if we traveled behind kanji mode start
    if(kanjiMode === 'on' && cursorLocation <= (kanjiLocation - 1))
      setKanjiMode('off')
  }

  // Render
  return (
    <div>
      <TextArea 
        ref={textArea}
        rows={props.rows} 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => parseKeyPress(e)}
        onClick={e => kanjiModeValidation(e)}/>
      <StatusLight status={kanjiMode} label="漢字" japanese={true}/>
    </div>
  )
}

// Proptypes
JapaneseInput.propTypes = {
  rows: PropTypes.string,
  onRomajiUpdate: PropTypes.func
}

export default JapaneseInput
