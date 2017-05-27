import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Form, Field, destroy, isValid } from 'redux-form'
import Book from 'material-ui/svg-icons/action/book'
import { TextField } from 'redux-form-material-ui'
import CitationRegister from './CitationRegister'
import style from './style'

const formName = 'book'

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'author',
    'title',
    'place',
    'editor',
    'year',
  ]

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Obrigatório'
    }
  })

  return errors
}

let BookCitationRegister = (props) => {
  return (
    <CitationRegister
      buttonIconRenderer={() => (<Book />)}
      buttonLabel='Livro'
      dialogTitle='Adicionar Citação a Livro'
      formName={formName}
      isFormValid={props.valid}
      onSubmit={props.onRegisterFormSubmit}
      clear={props.destroy}
    >
      <Form onSubmit={
        props.handleSubmit(
          (values) => props.onRegister(formName, values)
        )}>
        <Field
          name="author"
          component={TextField}
          fullWidth={true}
          hintText="Autor"
          label="Autor" />
        <Field
          name="title"
          component={TextField}
          fullWidth={true}
          hintText="Título"
          label="Título" />
        <Field
          name="subtitle"
          component={TextField}
          fullWidth={true}
          hintText="Subtítulo (se houver)"
          label="Subtítulo" />
        <Field
          name="edition"
          component={TextField}
          hintText="Edição (se houver)"
          label="Edição"
          style={{...style.form.twoColumnLeft}} />
        <Field
          name="place"
          component={TextField}
          hintText="Local de publicação (cidade)"
          label="Local de publicação"
          style={{...style.form.twoColumnRight}} />
        <Field
          name="editor"
          component={TextField}
          hintText="Editora"
          label="Editora"
          style={{...style.form.twoColumnLeft}} />
        <Field
          name="year"
          component={TextField}
          hintText="Ano de publicação"
          label="Ano de publicação"
          style={{...style.form.twoColumnRight}} />
      </Form>
    </CitationRegister>
  )
}

BookCitationRegister.propTypes = {
  destroy: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onRegisterFormSubmit: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  valid: PropTypes.bool,
}

BookCitationRegister.defaultProps = {
  valid: false,
}

BookCitationRegister = reduxForm({
  form: formName,
  onSubmitSuccess: (result, dispatch) => { dispatch(destroy(formName)) },
  validate,
})(BookCitationRegister)

BookCitationRegister = connect(
  state => ({
    valid: isValid(formName)(state),
  })
)(BookCitationRegister)

export default BookCitationRegister
