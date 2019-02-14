import {Toast} from "antd-mobile";

export function showToast(content, type = 'info', duration = 3, callback = null, mask = true) {
  Toast[type](content, duration, typeof callback === 'function' ? callback() : null, mask)
}
