import axios from "axios";
import {showToast} from "../utils/common"

const instance = axios.create();

instance.defaults.timeout = 10000

instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log('++err++', err)
  Promise.reject(err)
})

instance.interceptors.response.use(res => {
    if (res.status !== 200) {
      showToast(res.message, 'fail')
      return Promise.reject('error')
    } else {
      return res.data
    }
  }, err => {
    console.log('--err--', err)
    showToast('请求失败' + err, 'error')
    return Promise.reject(err)
  }
)

export default instance;
