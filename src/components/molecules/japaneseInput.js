import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TextArea, StatusLight } from '../atoms'
import { PillSelector } from '../molecules'
import * as wanakana from 'wanakana'
import * as AutoKanji from 'autokanji'

const JapaneseInput = props => {
  // State Hooks
  var [inputValue, setInputValue] = useState('')
  var [kanjiMode, setKanjiMode] = useState('off')
  var [kanijSuggestions, setKanjiSuggestions] = useState([])

  // Ref Hooks
  var textArea = useRef(null)
  var translationStart = useRef(0)
  var deletionOccurred = useRef(false)
  var cursorLocation = useRef(0)
  var applyingTranslation = useRef(false)
  var kanjiLocation = useRef(-1)

  // Effect Hooks
  useEffect(() => {
    // Exit if empty
    if (inputValue === "")
      return

    // Only run if not deletion or we are not applying translation
    if (deletionOccurred.current) {
      deletionOccurred.current = false
      return
    }
    else if (applyingTranslation.current) {
      applyingTranslation.current = false
      putCursor()
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

      // Set Translation gaurd
      applyingTranslation.current = true

      // Pull out piece to translate
      var translation = inputValue.substring(translationStart.current, textArea.current.selectionStart)

      // Do the translation
      translation = wanakana.toKana(translation, { customKanaMapping: { nn: 'ん', NN: 'ン' } })

      // Determine cursor location
      cursorLocation.current = translationStart.current + translation.length

      // Complete translation
      translation = inputValue.substring(0, translationStart.current) + translation + inputValue.substring(textArea.current.selectionStart)

      // Clear out trandlation start
      translationStart.current = -1

      // Set inputvalue
      setInputValue(translation)

      // If in kanji mode fetch the suggestions
      if (kanjiMode === "on") {

        
        // Cut the kanji input out
        var kanjiInput = translation.substring(kanjiLocation.current, cursorLocation.current)

        // Get suggestions
        setKanjiSuggestions(AutoKanji.find(kanjiInput))
      }

    }, 300)

    // Cleanup the timer 
    return () => clearTimeout(timer)
  }, [inputValue])

  // Functions
  const putCursor = () => {
    if (cursorLocation.current != -1) {
      textArea.current.focus();
      textArea.current.setSelectionRange(cursorLocation.current, cursorLocation.current);
    }
  }

  const parseKeyPress = e => {
    // Check kanji mode validation
    kanjiModeValidation(e)

    // Set translation start
    if (translationStart.current === -1 || textArea.current.selectionStart < translationStart.current)
      translationStart.current = textArea.current.selectionStart

    // Check hotkeys
    switch (e.keyCode) {

      // K key: enable kanji mode
      case 75:
        if (e.ctrlKey) {
          if (kanjiMode === 'off') {
            setKanjiMode('on')
            kanjiLocation.current = textArea.current.selectionStart
          }
          else {
            setKanjiMode('off')
            kanjiLocation.current = -1
          }
        }

        break;

      case 8:
      case 46:
        deletionOccurred.current = true
        break;
    }
  }

  const kanjiModeValidation = (e) => {
    // Capture cursor location
    var cursorLocation = textArea.current.selectionStart
    if (e.keyCode && e.keyCode === 8)
      cursorLocation--

    // Check if we traveled behind kanji mode start
    if (kanjiMode === 'on' && cursorLocation <= (kanjiLocation.current - 1))
      setKanjiMode('off')
  }

  const selectKanji = (index) => {
    // Update input
    var newInput = inputValue.substring(0, kanjiLocation.current)
    newInput += kanijSuggestions[index]

    setInputValue(newInput)

    // Clean up
    kanjiLocation.current = -1
    setKanjiMode('off')
    setKanjiSuggestions([])
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
        onClick={e => kanjiModeValidation(e)} />
      <div style={{ display: 'inline-block' }}>
        <StatusLight status={kanjiMode} label="漢字" japanese={true} />
        <PillSelector selections={kanijSuggestions} isJapanese={true} onClick={i => selectKanji(i)} />
      </div>

    </div>
  )
}

// Proptypes
JapaneseInput.propTypes = {
  rows: PropTypes.string,
  onRomajiUpdate: PropTypes.func
}

export default JapaneseInput
