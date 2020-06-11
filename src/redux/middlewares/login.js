import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import * as API from 'services/usersApi';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions'

const login = (email, password, type) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signIn(email, password, type)
    
    promise.then((response) => {
      if (response.error !== undefined) {
        dispatch(loginFailure(response.message))
      } else {
        Cookies.set('token', response.headers.Authorization, {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.Authorization)
        dispatch(loginSuccess(decoded_token.id, decoded_token.email, decoded_token.type))
        window.location.pathname = '/'
      }
    })
  }
}

const logup = (username, email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signUp(username, email, password)
    
    promise.then((response) => {
      console.log(response, 'lllll')
        console.log(response.error)
      if (response.error !== undefined) {
        dispatch(loginFailure(response.message))
      } else {
        console.log(response)
        Cookies.set('token', response.jwt, {sameSite: 'lax'})
        let decode = jwt_decode(response.jwt)
        dispatch(loginSuccess(decode.id, decode.username))
        window.location.pathname = '/'
      }
    })
  }
}
export {login, logup}
