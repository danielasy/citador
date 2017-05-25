import React from 'react'
import PropTypes from 'prop-types'
import Laptop from 'material-ui/svg-icons/hardware/laptop-mac'
import CitationRegister from './CitationRegister';

const SiteCitationRegister = (props) => {
  return (
    <CitationRegister
      buttonIconRenderer={() => (<Laptop />)}
      buttonLabel='Site'
      dialogTitle='Adicionar Citação a Site'
    >
      :3
    </CitationRegister>
  )
}

SiteCitationRegister.propTypes = {
}

SiteCitationRegister.defaultProps = {
}

export default SiteCitationRegister
