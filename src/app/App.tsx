import {Outlet} from 'react-router-dom'
import {AuthInit} from './modules/auth'

const App = () => {
  return (
    <AuthInit>
      <Outlet />
    </AuthInit>
  )
}

export {App}
