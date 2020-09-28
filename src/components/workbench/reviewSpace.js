import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Column, Section,} from '../layouts'
import { ScreenCapture } from '../molecules'
import { Title, Switch } from '../atoms'
import {UPDATE_WORKSPACE_SETTINGS} from '../../redux/actionTypes'

// Component
const ReviewSpace = props => {

  // State Hooks

  // Functions

  // Selectors
  const workbenchSettings = useSelector(state => state.project.data.workspace)

  // Actions
  const dispatch = useDispatch()
  const updateSettings = settings => {
    dispatch({ type: UPDATE_WORKSPACE_SETTINGS, payload: settings})
  }

  // Variables

  return (
    <Column col={props.col} flex={true}>
      <ScreenCapture />
      <Title>
        Control Panel
      </Title>
      <Section fill={true}>
        <Switch label="Romaji" status={workbenchSettings.romaji} click={(val) => {workbenchSettings.romaji = val; updateSettings(workbenchSettings);}}/>
      </Section>
    </Column>
  )
}

// Prop Types
ReviewSpace.propTypes = {
  col: PropTypes.number
}

export default ReviewSpace
