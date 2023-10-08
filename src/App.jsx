import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Login/Login'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
// import { BrowserRouter, createBrowserRouter, Routes } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './Config/ProtectedRouter'
import { useLocalStorage } from 'react-use'

// const router = createBrowserRouter([
//   { path: '/', element: <div><Home/></div> },
//   { path: '/Login', element: <div><Login/></div> },
//   { path: '/Register', element: <div><Register/></div> },
//   { path: '/Dashboard', element: <div><Dashboard/></div> },
// ])

function App() {

const  [user] = useLocalStorage('user');

  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route element={<ProtectedRoute canActivate={user} redirectPath='/login' />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <RouterProvider router={router}/>
    //   </div>
  )
}

export default App
