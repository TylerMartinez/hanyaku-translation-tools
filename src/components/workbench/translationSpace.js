import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Column, Row, RelativeSection } from '../layouts'
import { useSelector, useDispatch  } from 'react-redux'
import { TextArea, Title, ImageButton } from '../atoms'
import { JapaneseInput } from '../molecules'
import RightArrow from '../../images/right-arrow'
import Camera from '../../images/camera'
import { takeScreenshot } from '../../utils/capturingUtils'
import {UPDATE_WORKSPACE_SETTINGS, UPDATE_TRANSLATION, CREATE_TRANSLATION} from '../../redux/actionTypes'
import { getNewTranslation } from '../../utils/projectUtils'
import { useObjectSelector } from '../../utils/hooks'

// Component
const TranslationSpace = props => {
  // Selectors
  const workbenchSettings = useObjectSelector(state => state.project.data.workspace)
  const translation = useObjectSelector(state => state.project.data.translations[workbenchSettings.currentIndex])
  const translationsCount = useSelector(state => state.project.data.translations.length)

  // State Hooks
  var [originalValue, setOriginalValue] = useState(translation ? translation.original : "")
  var [romajiValue, setRomajiValue] = useState('')

  // Actions
  const dispatch = useDispatch()
  const updateSettings = () => {
    dispatch({ type: UPDATE_WORKSPACE_SETTINGS, payload: workbenchSettings})
  }
  const updateTranslation = () => {
    dispatch({ type: UPDATE_TRANSLATION, payload: {translation: translation, index: workbenchSettings.currentIndex}})
  }

  const createTranslation = newTranslation => {
    dispatch({ type: CREATE_TRANSLATION, payload: {translation: newTranslation, index: workbenchSettings.currentIndex}})
  }

  // Effect Hooks
  useEffect(() => {
    setOriginalValue(translation ? translation.original : "")
  }, [workbenchSettings.currentIndex])

  useEffect(() => {
    if(translation && translation.image === null && workbenchSettings.crop !== null){
      capture()
    }
  }, [translation])

  // Functions
  const setImage = img => {
    translation.image = img
    updateTranslation()
  }

  const createAndSetImage = img => {
    var newTranslation = getNewTranslation()
    newTranslation.image = img
    setOriginalValue(null)
    createTranslation(newTranslation)
  }

  const setOriginal = text => {
    translation.original = text
    updateTranslation(translation)
  }

  const capture = async create => {
    if(create) {
      await takeScreenshot(workbenchSettings.crop, createAndSetImage)
    } else {
      await takeScreenshot(workbenchSettings.crop, setImage)
    }
  } 

  const navigateTranslations = async direction => {
    if(direction == -1) {
      workbenchSettings.currentIndex-=1

      updateSettings()
    } else {
      workbenchSettings.currentIndex+=1

      if(workbenchSettings.currentIndex >= translationsCount) {
        await capture(true)
      } else {
        updateSettings()
      }
    }
  }

  // Variables

  // Render
  return (
    <Column col={props.col} flex={true}>
      <Row padding={true}>
        <Title>
          Original
        </Title>
      </Row>
      <Row fill={true} padding={true}>
        <JapaneseInput onRomajiUpdate={(romaji) => setRomajiValue(romaji)} onSave={(text) => setOriginal(text)}  initialValue={originalValue}/>
      </Row>
      { workbenchSettings.romaji && 
        <Row padding={true}>
          <Title>
            Romaji
          </Title>
        </Row>}
      { workbenchSettings.romaji &&
        <Row fill={true} padding={true}>  
          <TextArea className="flex-grow-1" value={romajiValue} onChange={(e) => setRomajiValue(e.target.value)} />
      </Row>}
      <Row padding={true}>
        <Title>
          Translation
        </Title>
      </Row>
      <Row fill={true} padding={true}>  
        <TextArea className="flex-grow-1" />
      </Row>
      <RelativeSection>
        <ImageButton flip={true} 
                      image={RightArrow} 
                      position={"absolute"} 
                      left={"0px"} 
                      disabled={workbenchSettings.currentIndex === 0} 
                      onClick={() => {navigateTranslations(-1)}}/>
        <ImageButton image={Camera} position={"absolute"} size={"20px"} top={"-3px"} left={"calc(50% - 10px)"} onClick={capture}/>
        <ImageButton image={RightArrow} position={"absolute"} right={"0px"} onClick={navigateTranslations}/>
      </RelativeSection>
    </Column>
  )
}

// Prop Types
TranslationSpace.propTypes = {
  col: PropTypes.number
}

export default TranslationSpace
