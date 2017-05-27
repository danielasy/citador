import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as citationActions from '../actions/citations'
import Editor from '../components/Editor'

function mapStateToProps(state) {
  return {
    citations: state.citations,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(citationActions, dispatch),
  }
}

export const EditorContainer = (props) => {
  return (
    <Editor
      actions={props.actions}
      citations={props.citations}
    />
  )
}

EditorContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  citations: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer)
