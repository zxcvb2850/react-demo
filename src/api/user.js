import request from "../api/config";

export function userInfo() {
  return request({
    url: '/users/info',
    method: 'get',
  })
}
