import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <div className='app-container'>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
