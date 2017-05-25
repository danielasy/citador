import React from 'react'
import PropTypes from 'prop-types'
import Book from 'material-ui/svg-icons/action/book'
import CitationRegister from './CitationRegister';

const BookCitationRegister = (props) => {
  return (
    <CitationRegister
      buttonIconRenderer={() => (<Book />)}
      buttonLabel='Livro'
      dialogTitle='Adicionar Citação a Livro'
    >
      :3
    </CitationRegister>
  )
}

BookCitationRegister.propTypes = {
}

BookCitationRegister.defaultProps = {
}

export default BookCitationRegister
