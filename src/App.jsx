import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Login/Login'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <div><Home/></div> },
  { path: '/Login', element: <div><Login/></div> },
  { path: '/Register', element: <div><Register/></div> },
  { path: '/Dashboard', element: <div><Dashboard/></div> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      </div>
  )
}

export default App
