/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 */

import {FC, lazy, Suspense, ReactNode} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_test/assets/ts/_utils'
import {App} from '../App'


const AppRoutes: FC = () => {
  const {isAuthenticated} = useAuth()
  const ItemsPage = lazy(() => import('../modules/item-management/ItemsPage'))

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='logout' element={<Logout />} />
          {isAuthenticated ? (
            <>
              <Route path='/' element={ 
                <SuspensedView>
                  <ItemsPage />
                </SuspensedView>
                }     
              />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

type Props = {
  children?: ReactNode
}

const SuspensedView: FC<Props> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {AppRoutes}
