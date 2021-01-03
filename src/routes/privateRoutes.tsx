import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoutes = (props) => {
  const { path: Path } = props
  const { component: Component } = props //same
  //   const Component = props.component //same
  return (
    <Route
      exact
      path={Path}
      render={() => {
        return true ? <Component /> : <Redirect to="/login" />
      }}
    />
  )
}

export default PrivateRoutes
