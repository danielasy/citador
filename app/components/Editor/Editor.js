import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import Toolbar from '../Toolbar'

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <Toolbar />
      <Paper />
    </div>
  )
}

export default Editor
