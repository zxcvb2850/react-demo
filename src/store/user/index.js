/**
 * 用户登录相关的redux
 * */
import axios from "axios"
import {showToast} from "../../utils/common";
import {getRedirectPath} from "../../utils/utils";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  isAuth: false,//是否登录
  msg: '',
  user: '',
  pwd: '',
  type: '',
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    case LOGIN_SUCCESS:
      console.log(action)
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
    default:
      return {}
  }
}

function registerSuccess(data, msg = "获取成功") {
  showToast(msg, 'success')
  return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data, msg) {
  showToast(msg, 'success')
  return {type: LOGIN_SUCCESS, payload: data}
}

function errorMsg(msg) {
  showToast(msg, 'info')
  return {msg, type: ERROR_MSG}
}

/* actions */

//登录
export function login({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  return dispatch => {
    axios.post('/users/login', {user, pwd})
      .then(res => {
        console.log('----', res)
        if (res.status !== 200 && res.data.code !== 0) {
          return errorMsg(res.data.msg)
        } else {
          dispatch(loginSuccess(res.data.data, res.data.msg))
        }
      })
      .catch(err => {
        console.log(err)
        errorMsg('登录失败,请联系管理员')
      })
  }
}

//注册
export function regisger({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必填')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码不一致')
  }
  return dispatch => {
    axios.post('/users/register', {user, pwd, type})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, type}, res.data.msg))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
      .catch(err => {
        console.log('获取失败', err);
        dispatch(errorMsg('获取失败'))
      })
  }
}