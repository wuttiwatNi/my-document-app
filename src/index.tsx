import ReactDOM from 'react-dom'
import rootRoutes from './routes/rootRoutes'
import 'antd/dist/antd.css'
import './style.scss'

const routes = rootRoutes()

ReactDOM.render(routes, document.getElementById('root'))

// import reportWebVitals from './donKnow/reportWebVitals'
// reportWebVitals()
