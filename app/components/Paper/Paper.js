import React from 'react'
import PropTypes from 'prop-types'
import BasePaper from 'material-ui/Paper'
import style from './style'

const Paper = (props) => {
  return (
    <BasePaper style={{...style}} rounded={false} zDepth={3}>
      {props.children}
    </BasePaper>
  )
}

Paper.propTypes = {
  children: PropTypes.node,
}

Paper.defaultProps = {
  children: 'Ainda não há citações :('
}

export default Paper
