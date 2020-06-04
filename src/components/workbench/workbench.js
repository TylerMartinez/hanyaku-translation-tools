import React, { useState } from 'react'
import { Viewport, Row } from '../layouts'
import ReviewSpace from './reviewSpace'
import TranslationSpace from './translationSpace'

// Component
const Workbench = () => {

  // State Hooks
  const [reviewMode] = useState(true)

  // Functions

  // Actions

  // Variables

  return (
    <Viewport fluid={true}>
     <Row fill={true}>
        <ReviewSpace col={reviewMode ? 8 : 0}/>
        <TranslationSpace col={reviewMode ? 4 : 12}/>
     </Row>
    </Viewport>
  )
}

// Prop Types
Workbench.propTypes = {
}

export default Workbench
