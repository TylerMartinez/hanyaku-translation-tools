import React, { useState } from 'react'
import { Viewport, Row, Column } from '../layouts'
import ReviewSpace from './reviewSpace'
import TranslationSpace from './translationSpace'

// Component
const Workbench = () => {

  // State Hooks
  const [reviewMode] = useState(false)

  // Functions

  // Actions

  // Variables

  return (
    <Viewport fluid={true}>
     <Row>
       <Column col={reviewMode ? 10 : 0}>
         <ReviewSpace/>
       </Column>
       <Column col={reviewMode ? 2 : 12}>
         <TranslationSpace/>
       </Column>
     </Row>
    </Viewport>
  )
}

// Prop Types
Workbench.propTypes = {
}

export default Workbench
