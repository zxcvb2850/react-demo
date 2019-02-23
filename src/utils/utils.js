/**
 *
 * */

// 根据用户信息跳转不同的页面
export function getRedirectPath({ type, avatar }) {
  //user.type /boos /genius
  //user.avatar /boosinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}