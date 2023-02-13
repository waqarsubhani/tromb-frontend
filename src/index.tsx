import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {QueryClient, QueryClientProvider} from 'react-query'
import './_test/assets/sass/style.scss'
import './_test/assets/sass/plugins.scss'
import './_test/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
/**
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryClientProvider>
  )
}
