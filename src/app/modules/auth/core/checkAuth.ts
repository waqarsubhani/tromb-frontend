import jwtDecode, { JwtPayload} from 'jwt-decode'
import { getAuth } from './AuthHelpers'
import { AuthModel } from './_models'


export function checkAuth(): boolean {
  // Get the JWT from local storage or a cookie
  const auth: AuthModel | undefined = getAuth()

  // If there is no JWT, the user is not authenticated
  if (!auth) {
    return false
  }

  // Otherwise, decode the JWT to get the expiry time
  const decoded: { exp?: number } = jwtDecode(auth.accessToken)
  const expiry = decoded.exp

  // If the expiry time is not defined or is in the past, the token is no longer valid
  if (!expiry || expiry < Date.now() / 1000) {
    return false
  }

  // If the JWT is valid, the user is authenticated
  return true
}
