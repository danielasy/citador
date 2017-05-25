import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as citationRegisterActions from '../actions/citationRegisterActions';
import Editor from '../components/Editor'

function mapStateToProps(state) {
  return {
    citationRegister: state.citationRegister
  }
}

function mapDispatchToProps(dispatch) {
  return {
    citationRegister: bindActionCreators(citationRegisterActions, dispatch)
  }
}

export const EditorContainer = (props) => {
  return (
    <Editor
      citationRegisterActions={props.actions.citationRegister}
      citationRegister={props.citationRegister}
    />
  )
}

EditorContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  citationRegister: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorContainer)
