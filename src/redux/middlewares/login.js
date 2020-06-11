import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import * as API from 'services/usersApi';
import {loginRequest, loginSuccess , loginFailure} from 'redux/action/authActions'

const login = (identifier, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signIn(identifier, password)
    
    promise.then((response) => {
      if (response.error !== undefined) {
        dispatch(loginFailure(response.message))
      } else {
        Cookies.set('token', response.jwt, {sameSite: 'lax'})
        let decode = jwt_decode(response.jwt)
        dispatch(loginSuccess(decode.id, decode.username))
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
