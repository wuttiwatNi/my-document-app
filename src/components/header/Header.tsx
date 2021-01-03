import React from 'react'
import { Switch, Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ match }) => {
  return (
    <div className="main-header">
      <div className="h-left">
        <img className="logo" src={process.env.PUBLIC_URL + '/assets/person.jpg'} />
        <Link to={{ pathname: `${match.path}/` }}>home</Link>
        <Link to={{ pathname: `${match.path}/1` }}>page1</Link>
        <Link to={{ pathname: `${match.path}/2` }}>page2</Link>
        <Link to={{ pathname: `${match.path}/3` }}>page3</Link>
      </div>
      <div>sign in</div>
    </div>
  )
}

export default Header
