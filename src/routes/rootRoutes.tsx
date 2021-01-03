import React from 'react'
import PrivateRoutes from './privateRoutes'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from '../components/app/App'

const RootRoutes = () => (
  <Router>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={App} />
    {/* <PrivateRoutes path="/3" component={test3} />
    <Route exact path="/login">
      <div>login</div>
    </Route> */}
  </Router>
)

export default RootRoutes
