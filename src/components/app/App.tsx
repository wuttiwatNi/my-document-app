import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse'
import './App.scss'

const pageList = ['facebook', 'instagramm', 'mymir']

const App = ({ match }) => {
  const [page, setPage] = useState(pageList[0])
  const [isHoverBtnPage, setIsHoverBtnPage] = useState(false)

  let handleBtnPageClick = (page) => {
    setIsHoverBtnPage(false)
    setPage(page)
  }

  let btnPageStyle = (icon) => ({
    backgroundImage: `url("/assets/img/${icon}.png")`,
    backgroundSize: 'cover',
  })

  return (
    <>
      <div className="main-btn-page" onMouseEnter={() => setIsHoverBtnPage(true)} onMouseLeave={() => setIsHoverBtnPage(false)}>
        <Collapse in={isHoverBtnPage}>
          <div className="list">
            {pageList.map((value, index) => {
              return page == pageList[index] ? (
                ''
              ) : (
                <button
                  key={index}
                  className="btn-page circle"
                  style={btnPageStyle(pageList[index])}
                  onClick={() => {
                    handleBtnPageClick(value)
                  }}
                ></button>
              )
            })}
          </div>
        </Collapse>
        <button className="btn-page circle" style={btnPageStyle(page)}></button>
      </div>
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
