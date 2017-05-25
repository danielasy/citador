import React from 'react'
import PropTypes from 'prop-types'
import School from 'material-ui/svg-icons/social/school'
import CitationRegister from './CitationRegister';

const ThesisCitationRegister = (props) => {
  return (
    <CitationRegister
      buttonIconRenderer={() => (<School />)}
      buttonLabel='Monografia'
      dialogTitle='Adicionar Citação a Monografia'
    >
      :3
    </CitationRegister>
  )
}

ThesisCitationRegister.propTypes = {
}

ThesisCitationRegister.defaultProps = {
}

export default ThesisCitationRegister
