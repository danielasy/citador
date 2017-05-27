import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import Toolbar from '../Toolbar'

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <Toolbar
        actions={props.actions} />
      <Paper
        citations={props.citations} />
    </div>
  )
}

Editor.propTypes = {
  actions: PropTypes.object.isRequired,
  citations: PropTypes.array.isRequired
}

export default Editor
