import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from '../index'
import { Button, Menu, Dropdown } from 'antd'
import './App.scss'

const App = ({ match }) => {
  let handleMenuClick = (e) => {
    console.log('click: ', e.key)
  }

  let menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  )

  return (
    <>
      {/* <Header match={match} /> */}
      <Dropdown.Button overlay={menu}></Dropdown.Button>
      <Switch>
        <Route exact path={`${match.path}`}>
          <div>x0</div>
        </Route>
        <Route exact path={`${match.path}/1`}>
          <div>x1</div>
        </Route>
        <Route exact path={`${match.path}/2`}>
          <div>x2</div>
        </Route>
        <Route exact path={`${match.path}/3`}>
          <div>x3</div>
        </Route>
      </Switch>
    </>
  )
}

export default App

// type User = {
//   user: string
//   password: string
// }

// const defaultUser: User = {
//   user: '',
//   password: '',
// }
// const [date, setDate] = useState<Date | null>(null)
// const [user, setUser] = useState(defaultUser)
// const [count, setCount] = useState<number>(0)
// setCount((x) => {
//   console.log(count, 'l')
//   return x + 25
// })

// let click = () => {
//   window.alert(user.user + ' : ' + user.password)
// }

// let change = ({ target }) => {
//   setUser({ ...user, [target.name]: target.value })
// }
