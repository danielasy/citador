import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Editor from './components/Editor'
import Configuration from './components/Configuration'
import Help from './components/Help'
import About from './components/About'
import NotFound from './components/NotFound'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Editor} />
    <Route path="configuracao" component={Configuration} />
    <Route path="ajuda" component={Help} />
    <Route path="sobre" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
