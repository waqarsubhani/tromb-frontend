import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'
import {AuthModel} from './_models'
import * as authHelper from './AuthHelpers'
import {WithChildren} from '../../../../_test/helpers'
import { checkAuth } from './checkAuth'
import { useNavigate } from 'react-router-dom'

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  isAuthenticated: boolean,
  setAuthenticated: Dispatch<SetStateAction<boolean>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  isAuthenticated: false,
  setAuthenticated: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
  }

  return (
    <AuthContext.Provider value={{auth, saveAuth, isAuthenticated, setAuthenticated, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({children}) => {
  const {setAuthenticated} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    try {
      const isAuthenticated = checkAuth()
      setAuthenticated(isAuthenticated)
      navigate('/', { replace: true})
    } catch (error) {
      console.error(error)
    }
    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}
