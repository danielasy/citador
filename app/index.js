import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'
import { store, history } from './store'
import routes from './routes';
import './styles.scss'

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} routes={routes} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} routes={routes} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
