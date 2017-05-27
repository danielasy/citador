import React from 'react'
import PropTypes from 'prop-types'
import BasePaper from 'material-ui/Paper'
import formatter from '../../helpers/citations'
import style from './style'

const Paper = (props) => {
  return (
    <BasePaper style={{...style}} rounded={false} zDepth={3}>
      {
        props.citations.length === 0 ?
        'Ainda não há citações :(' :
        props.citations.map(
          (citation) => formatter(citation)
        )
      }
    </BasePaper>
  )
}

Paper.propTypes = {
  citations: PropTypes.array,
}

Paper.defaultProps = {
  citations: [],
}

export default Paper
