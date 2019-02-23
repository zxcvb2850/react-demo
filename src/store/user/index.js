/**
 * 用户登录相关的redux
 * */
import axios from "axios"
import { showToast } from "../../utils/common";
import { getRedirectPath } from "../../utils/utils";

const AUTO_SUCCESS = 'AUTO_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_DATA = 'LOGIN_DATA'

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
    case AUTO_SUCCESS:
      return { ...state, msg: '获取成功', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    case LOGIN_DATA:
      return { ...state, ...action.payload }
    default:
      return {}
  }
}

function autoSuccess(data, msg = "获取成功") {
  showToast(msg, 'success')
  return { type: AUTO_SUCCESS, payload: {...data, time: Date.now()} }
}

function errorMsg(msg) {
  showToast(msg, 'info')
  return { msg, type: ERROR_MSG }
}

/* actions */

//登录
export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  return dispatch => {
    axios.post('/users/login', { user, pwd })
      .then(res => {
        if (res.status !== 200 || res.data.code !== 0) {
          return errorMsg(res.data.msg)
        } else {
          dispatch(autoSuccess(res.data.data, res.data.msg))
        }
      })
      .catch(err => {
        console.log(err)
        errorMsg('登录失败,请联系管理员')
      })
  }
}

//注册
export function regisger({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必填')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码不一致')
  }
  return dispatch => {
    axios.post('/users/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(autoSuccess({ user, type }, res.data.msg))
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

// 获取用户信息
export function loadData(userinfo) {
  return { type: LOGIN_DATA, payload: userinfo }
}

export function update(data) {
  if (!data.title && !data.company && !data.money && !data.desc) {
    return errorMsg('请完整填写信息')
  }
  return dispatch => {
    axios.post('/users/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(autoSuccess(res.data.data, res.data.msg))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
      .catch(err => {
        console.log(err)
        showToast('提交失败', 'error')
      })
  }
}